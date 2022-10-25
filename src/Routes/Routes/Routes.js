import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Route404 from "../../Pages/Route404";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')

            },
            {
                path: '/courses',
                element: <Courses></Courses>,


            },
            {
                path: '/faq',
                element: <FAQ></FAQ>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },

            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/registration',
                element: <Register></Register>

            }




        ]
    },
    {
        path: '/*',
        element: <Route404></Route404>
    }
])