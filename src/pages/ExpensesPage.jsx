// react router dom imports
import { useLoaderData } from "react-router-dom";

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
        <div className="grid-sm">
            <h1>Expenses</h1>
            <p>
                This is the expenses page.
            </p>
        </div>
    )
}


export default ExpensesPage