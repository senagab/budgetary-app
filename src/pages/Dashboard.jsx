// react router dom imports
import { useLoaderData } from "react-router-dom";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// helper functions
import { fetchData } from "../helpers"

// library imports
import { toast } from "react-toastify";

// loader
export function dashboardLoader() { // helper function fetches data
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets } // returns in object
}

// action
export async function dashboardAction({request}){
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    console.log("~ dashboardAction ~ formData", formData)
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName)) // set the userName in local storage
        return toast.success(`Welcome, ${formData.userName}`) // show success message
    } catch (e) {
        throw new Error("There was a problem creating your account.")
    }
}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData() // custom hook coming in from loader function

    return (
        <>
            {userName ? (
                <div>
                    <h1>Welcome back, <span className="accent">{{userName}}</span></h1>
                    <div className="grid-sm">
                        {/* {budgets ? () : ()} */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
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