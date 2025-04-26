// react router dom imports
import { redirect } from "react-router-dom";

// library toastify imports
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
    // delete the user
    deleteItem({
        key: "userName", // deletes user when logging out
    })
    deleteItem({
        key: "budgets", // deletes remaining budgets when logging out
    })
    deleteItem({
        key: "expenses", // deletes user when logging out
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