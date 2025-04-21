// react imports
import { useEffect, useRef } from "react"

// react router dom imports
import { useFetcher } from "react-router-dom"

// library imports
import { PlusCircleIcon } from "@heroicons/react/16/solid"

const AddExpenseForm = () => {
    const fetcher = useFetcher() //  hook that allows you to fetch data from the server without reloading the page. used to create a new budget.    
    const isSubmitting = fetcher.state === "submitting" // check if the form is submitting

    const formRef = useRef()
    const focusRef = useRef() // create a ref to focus on the input field

    useEffect(() => {
        if (!isSubmitting) {
            // clear form
            formRef.current.reset() // reset the form after submission
            // reset focus
            focusRef.current.focus() // set the focus on the input field after submission
        }
    }, [isSubmitting]) // useEffect hook that runs when the form is submitting

    return (
        <div className="form-wrapper">
            <h2 className="h3">Add New {" "}
                <span className="accent">
                    {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
                </span>{" "}
                Expense
            </h2>
            <fetcher.Form 
            method="post" 
            className="grid-sm"
            ref={formRef}
            >
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input 
                        type="text" 
                        name="newExpense"
                        placeholder="e.g. Coffee"
                        ref={focusRef} // set the focus on the input field
                        required
                        />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">
                            Amount
                        </label>
                        <input 
                        type="number" 
                        step={0.01}
                        inputMode="decimal"
                        name="newExpenseAmount"
                        id="newExpenseAmount"
                        placeholder="e.g. 3.50"
                        required
                        />
                    </div>
                </div>
                <div className="grid-xs" hidden={budgets.length === 1}>
                    <label htmlFor="newExpensBudget">Budget Category</label>
                    <select name="newExpenseBudget" id="newExpenseBudget" required>
                        {
                            budgets
                                .sort((a, b) => a.createdAt - b.createdAt)
                                .map((budget) => (
                                    <option key={budget.id} value={budget.id}>
                                        {budget.name}
                                    </option>
                                ))

                        }
                    </select>
                </div>
                <input type="hidden" name="_action" value="createExpense" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting...</span> : (
                            <>
                                <span>Add Expense</span>
                                <PlusCircleIcon width={20}/>
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddExpenseForm