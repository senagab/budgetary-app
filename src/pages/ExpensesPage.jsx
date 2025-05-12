// react router dom imports
import { useLoaderData } from "react-router-dom";

// library import
import { toast } from "react-toastify";

// components imports
import Table from "../components/Table"; // Table component to display expenses

// helpers functions
import { deleteItem, fetchData } from "../helpers";

// loader
export async function expensesLoader() { // helper function fetches data
    const expenses = fetchData("expenses");
    return { expenses } // returns in object
}

// action
export async function expensesAction({request}) {
    
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data)

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

const ExpensesPage = () => {
    const { expenses } = useLoaderData();

    return (
        <div className="grid-lg">
            <h1>All Expenses</h1>
            {expenses && expenses.length > 0 ? (
                    <div className="grid-md">
                        <h2>
                            Recent Expenses 
                            <small>
                                ({expenses.length} total)
                            </small> 
                        </h2>
                        <Table expenses={expenses} />
                    </div>
                ) :
                (
                    <p>No expenses found</p>
                )
            }
        </div>
    )
}


export default ExpensesPage