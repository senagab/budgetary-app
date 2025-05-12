import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// library toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";

// routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, { 
  expensesAction, 
  expensesLoader 
} from "./pages/ExpensesPage";

const router = createBrowserRouter([
  {
    path: "/", // when this path is met
    element: <Main />, // this element will be shown
    loader: mainLoader, // load this data - from the function dashboardLoader()
    errorElement: <Error />,
    children: [
      {
        index: true, //  same as path: "/"
        element: <Dashboard />, // this element will be shown
        loader: dashboardLoader, // load this data - from the function dashboardLoader()
        action: dashboardAction, // action on actions/dashboard.js
        errorElement: <Error />
      },
      {
        path: "expenses", //  same as path: "/"
        element: <ExpensesPage />, // this element will be shown
        loader: expensesLoader,
        action: expensesAction, // action on actions/expenses.js
      },
      {
        path: "logout",
        action: logoutAction, // action on actions/logout.js
      },
    ]
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App;
