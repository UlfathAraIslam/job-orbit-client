import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
          path:'/jobs/:id',
          Component:JobDetails,
          loader: ({params}) =>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path:'/register',
            Component: Register,
        },
        {
            path:'/signin',
            Component: Signin,
        }
    ]
  },
]);

export default router;