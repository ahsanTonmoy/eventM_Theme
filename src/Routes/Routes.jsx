import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Loging from "../pages/User/Loging";
import Register from "../pages/User/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Loging></Loging>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
        ]
    },
]);

export default router;

