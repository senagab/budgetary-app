// react router dom imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// helper functions
import { createBudget, fetchData } from "../helpers"

// loader
export function dashboardLoader() { // helper function fetches data
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets } // returns in object
}

// action
export async function dashboardAction({request}){
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
}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData() // custom hook coming in from loader function

    return (
        <>
            {userName ? (
                <div className="dashboard">
                    <h1>Welcome back, <span className="accent">{userName}</span></h1>
                    <div className="grid-sm">
                        {/* {budgets ? () : ()} */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
                            </div>
                        </div>
                    </div>
                </div>
                ) : <Intro />}
        </>
    )
}

export default Dashboard