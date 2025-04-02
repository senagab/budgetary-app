// react router dom imports
import { useLoaderData } from "react-router-dom";

// components
import Intro from "../components/Intro";

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
        <>
            {userName ? (<p>{userName}</p>) : <Intro />}
        </>
    )
}

export default Dashboard