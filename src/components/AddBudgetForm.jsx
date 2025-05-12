// react imports
import { useEffect, useRef } from "react"

// react router dom imports
import { Form, useFetcher } from "react-router-dom"

// library imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"

const AddBudgetForm = () => {
    const fetcher = useFetcher() //  hook that allows you to fetch data from the server without reloading the page. used to create a new budget.
    const isSubmitting = fetcher.state === "submitting" // check if the form is submitting

    const formRef = useRef()
    const focusRef = useRef() // create a ref to focus on the input field

    useEffect(() => {   
        if (!isSubmitting) {
            formRef.current.reset() // reset the form after submission
            focusRef.current.focus() // set the focus on the input field after submission
        }
    }, [isSubmitting]) // useEffect hook that runs when the form is submitting

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create Budget
            </h2>            
            <fetcher.Form 
            method="post"
            className="grid-sm"
            ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input 
                    type="text" 
                    name="newBudget" 
                    id="newBudget" 
                    placeholder="e.g. Groceries"
                    required
                    ref={focusRef} // set the focus on the input field
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
                <input type="hidden" name="_action" value="createBudget" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting budget...</span> : (
                            <>
                                <span>Create Budget</span>
                                <CurrencyDollarIcon width={20}/>
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddBudgetForm