// react router dom imports
import { Form } from "react-router-dom";

// library imports
import { UserPlusIcon } from "@heroicons/react/16/solid";

// assets
import illustration from "../assets/illustration.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your Money</span>
                </h1>
                <p>
                    Personal budgeting is the secret to financial freedom. Start your journey today!
                </p>
                <Form method="post">
                    <input
                        type="text"
                        name="userName"
                        placeholder="Enter your name"
                        aria-label="Your name"
                        autoComplete="given-name"
                        required
                    />
                    <input type="hidden" name="_action" value="newUser" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="Person with money" width={600}/>
        </div>
    )
}

export default Intro