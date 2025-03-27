import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

// routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/", // when this path is met
    element: <Dashboard />, // this element will be shown
    loader: dashboardLoader, // load this data - from the function dashboardLoader()
  },
  {
    path: "*", // if no path that is not the paths listed above is show this
    element: <Error />
  }
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
