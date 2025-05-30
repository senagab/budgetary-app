// react router dom imports
import { Link, useFetcher } from "react-router-dom";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";

// helper imports
import { 
    formatCurrency, 
    formatDateToLocaleString, 
    getAllMatchingItems,
} from "../helpers"


const ExpenseItem = ({ expense, showBudget }) => {
    const fetcher = useFetcher() // get the fetcher object from react router dom

    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budgetId,
    })[0];
    // console.log(budget ?? "no budget found for this expense");
    
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
            <td>
                {
                    showBudget && (
                        <Link
                        to={`/budget/${budget.id}`}
                        style={{
                            "--accent": budget.color,
                        }}
                        >
                            {budget.name}
                        </Link>
                    )
                }
            </td>
            <td>
                <fetcher.Form method="post">
                    <input type="hidden" name="_action" value="deleteExpense" />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button 
                    type="submit"
                    className="btn btn--warning"
                    aria-label={`Delete ${expense.name} expense`}
                    >
                        <TrashIcon width={20} />
                    </button>
                </fetcher.Form>
            </td>
        </>
    )
}

export default ExpenseItem