import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

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
      }
    ]
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
