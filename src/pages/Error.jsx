import { useRouteError, Link, useNavigate } from "react-router-dom"

// library imports
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const Error = () => {
    const error = useRouteError() // custom hook to get the error object
    const navigate = useNavigate() // custom hook to get the navigate function
    
    return (
        <div className="error">
            <h1>Uh oh! We've got a problem</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                <button className="btn btn--dark" 
                onClick={() => navigate(-1)}>
                    <ArrowUturnLeftIcon width={20}/>
                    <span>Go back</span>
                </button>
                <Link
                to="/"
                className="btn btn--dark"
                >
                    <HomeIcon width={20}/>
                    <span>Go home</span>
                </Link>
            </div>
        </div>
    )
}

export default Error