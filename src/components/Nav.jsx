// react-router-dom imports
import { Form, NavLink } from "react-router-dom"

// lib imports
import { TrashIcon } from "@heroicons/react/24/solid"

// assets
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink
                to="/"
                aria-label="Go to home"
            >
                <img src={logomark} alt="" height={30} />
                <span>HomeBudget</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="/logout"
                        onSubmit={(event) => {
                            if(!confirm("Delete user's data?"))
                                event.preventDefault()
                        }}
                    >
                        <button type="submit" className="btn btn--warning">
                            <span>delete user</span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}

export default Nav