// react router dom imports
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers";

// library toastify imports
import { toast } from "react-toastify";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "userName",
    })

    toast.success("Logout successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })

    // return redirect
    return redirect("/")
}