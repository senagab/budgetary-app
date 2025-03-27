import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

// routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/", // when this path is met
    element: <Dashboard />, // this element will be shown
    loader: dashboardLoader, // load this data - from the function dashboardLoader()
  },
  {
    path: "/about",
    element: <h1>about</h1>
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
