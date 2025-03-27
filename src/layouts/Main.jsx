// react router dom imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets
import wave from "../assets/wave.svg"

// components
import Nav from "../components/Nav";

// helper functions
import { fetchData } from "../helpers"

// loader
export function mainLoader() { // helper function fetches data
    const userName = fetchData("userName");
    return { userName } // returns in object
}

const Main = () => {
    const { userName } = useLoaderData() // custom hook coming in from loader function

    return (
        <div className="layout">
            <Nav userName={userName} /> {/* passing userName as a prop */}
            <main>
                <Outlet />
            </main>
            <img src={wave} alt="" />
        </div>
    )
}

export default Main