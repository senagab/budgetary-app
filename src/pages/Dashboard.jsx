// react router dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers"

// loader
export function dashboardLoader() { // helper function fetches data
    const userName = fetchData("userName");
    return { userName } // returns in object
}

const Dashboard = () => {
    const { userName } = useLoaderData() // custom hook coming in from loader function

    return (
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    )
}

export default Dashboard