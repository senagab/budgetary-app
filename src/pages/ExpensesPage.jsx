// react router dom imports
import { useLoaderData } from "react-router-dom";

// components imports
import Table from "../components/Table"; // Table component to display expenses

// helpers functions
import { fetchData } from "../helpers";

// loader
export function expensesLoader() { // helper function fetches data
    const expenses = fetchData("expenses");
    return { expenses } // returns in object
}

const ExpensesPage = () => {
    const { expenses } = useLoaderData

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
                        <Table expenses={expenses} /> // Table component to display expenses
                    </div>
                ) :
                (
                    <h2>No expenses found</h2>
                )
            }
        </div>
    )
}


export default ExpensesPage