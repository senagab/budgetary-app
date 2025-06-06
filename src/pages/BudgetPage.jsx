// react router dom imports
import { useLoaderData } from "react-router-dom"

// library
import { toast } from "react-toastify"

// helpers
import { createExpense, deleteItem, getAllMatchingItems } from "../helpers"

// components
import BudgetItem from "../components/BudgetItem"
import AddExpenseForm from "../components/AddExpenseForm"
import Table from "../components/Table"

// loader
export async function budgetLoader({params}) {
    const budget = await getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: params.id
    })[0] // get the first item

    const expenses = await getAllMatchingItems({
        category: "expenses",
        key: "budgetId",
        value: params.id
    }) // get the first item

    if(!budget) {
        throw new Error("The budget you're trying to find doesn't exist") // throw an error if budget is not found
    }

    return { budget, expenses }
}


// action
export async function budgetAction({request}) {
    
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data)

    if (_action === "createExpense") {  
        try {
            // create expense
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })
            return toast.success(`expense ${values.newExpense} created!`)
        } catch (e) {
            throw new Error("There was a problem creating your expense.")
        }
    }

    if (_action === "deleteExpense") {  
        try {
            // delete expense
            deleteItem({
                key: "expenses",
                id: values.expenseId
            })
            return toast.success("expense deleted!")
        } catch (e) {
            throw new Error("There was a problem deleting your expense.")
        }
    }
}


const BudgetPage = () => {
    const { budget, expenses } = useLoaderData() // get the budget from the loader

    return (
        <div className="grid-lg"
        style={{
            "--accent": budget.color,
        }}>
            <h1 className="h2">
                <span className="accent">{budget.name} </span>
                Overview
            </h1>
            <div className="flex-lg">
                <BudgetItem budget={budget} showDelete={true} />
                <AddExpenseForm budgets={[budget]} />
            </div>
            {expenses && expenses.length > 0 ? (
                <div className="grid-md">
                    <h2>
                        <span className="accent">{budget.name} </span> 
                        Expenses
                    </h2>
                    <Table expenses={expenses} showBudgets={false} />
                </div>
            ) : (
                <div>
                    not found.
                </div>
            )}
        </div>
    )
}

export default BudgetPage