// react router dom imports
import { Link, useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";

// helper functions
import { createBudget, createExpense, deleteItem, fetchData, waait } from "../helpers"

// loader
export function dashboardLoader() { // helper function fetches data
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    const expenses = fetchData("expenses");
    return { userName, budgets, expenses } // returns in object
}

// action
export async function dashboardAction({request}){
    await waait() // simulate a delay

    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data)
    
    // use case user submisson
    if(_action === "newUser"){
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName)) // set the userName in local storage
            return toast.success(`Welcome, ${values.userName}`) // show success message
        } catch (e) {
            throw new Error("There was a problem creating your account.")
        }
    }

    // use case budget creation
    if (_action  === "createBudget") {  
        try {
            // create budget
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })
            return toast.success("budget created successfully!")
        } catch (e) {
            throw new Error("There was a problem creating your budget.")
        }
    }

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

const Dashboard = () => {
    const { userName, budgets, expenses } = useLoaderData() // custom hook coming in from loader function

    return (
        <>
            {userName ? (
                <div className="dashboard">
                    <h1>Welcome back, <span className="accent">{userName}</span></h1>
                    <div className="grid-sm">
                        {
                            budgets && budgets.length > 0 ? (
                                <div className="grid-lg">
                                    <div className="flex-lg">
                                        <AddBudgetForm />
                                        <AddExpenseForm budgets={budgets} />
                                    </div>
                                    <h2>Existing Budgets</h2>
                                    <div className="budgets">
                                        {
                                            budgets.map((budget) => (
                                                <BudgetItem key={budget.id} budget={budget} />
                                            ))
                                        }
                                    </div>
                                    {
                                        expenses && expenses.length > 0 ? (
                                            <div className="grid-md">
                                                <h2>Recent Expenses</h2>
                                                <Table expenses={expenses
                                                    .sort(
                                                        (a, b) => b.createdAt - a.createdAt
                                                        )
                                                    .slice(0, 8)
                                                    } 
                                                    />
                                                    {expenses.length > 1 && (
                                                        <Link 
                                                        to="/expenses" 
                                                        className="btn btn--dark">
                                                            View all expenses
                                                        </Link>                                                    )
                                                    }
                                            </div>
                                        ) 
                                        : (
                                            <div className="div">
                                                <p>
                                                    no expenses found
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                            : (
                                <div className="grid-sm">
                                    <p>
                                        Personal budgeting is the secret to financial freedom.
                                    </p>
                                    <p>
                                        Create a budget to get started!
                                    </p>
                                    <AddBudgetForm />
                                </div>
                            )
                        }
                    </div>
                </div>
                ) : <Intro />}
        </>
    )
}

export default Dashboard