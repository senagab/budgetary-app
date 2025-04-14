import { Form } from "react-router-dom"

const AddBudgetForm = () => {
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create Budget
            </h2>            
            <Form 
            method="post"
            className="grid-sm"
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input 
                    type="text" 
                    name="newBudget" 
                    id="newBudget" 
                    placeholder="e.g. Groceries"
                    required
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Budget Amount</label>
                    <input 
                    type="number" 
                    step="0.01"
                    name="newBudgetAmount" 
                    id="newBudgetAmount" 
                    placeholder="e.g. 400"
                    inputMode="decimal"
                    required
                    />
                </div>

            </Form>
        </div>
    )
}

export default AddBudgetForm