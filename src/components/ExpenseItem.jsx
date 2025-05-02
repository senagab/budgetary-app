// helper imports
import { formatCurrency, formatDateToLocaleString } from "../helpers"

const ExpenseItem = ({ expense }) => {

    const budget = getAllMatchingItem({
        category: "budgets",
        key: "id",
        value: expense.budgetId
    })
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
        </>
    )
}

export default ExpenseItem