// helper functions
import { calculateSpentByBudget, formatCurrency, formatPercentage } from "../helpers";

const BudgetItem = ({budget}) => {
    const {id, name, amount, color} = budget;
    const spent = calculateSpentByBudget(id); // calculate the spent by budget

    return (
        <div 
        className="budget"
        style={{
            "--accent": color, // set the accent color to the budget color
        }}
        >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent/amount)}%
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(spent)} spent</small>
                <small>{formatCurrency(amount - spent)} remaining</small>
            </div>
        </div>
    )
}

export default BudgetItem