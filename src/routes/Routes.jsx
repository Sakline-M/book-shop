import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import ConfirmPage from "../Pages/ConfirmPage/ConfirmPage";
import About from "../Pages/About/About";

const Routes = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/cart",
                element : <Cart></Cart>
            },
            {
                path : "/confirm",
                element : <ConfirmPage></ConfirmPage>
            },
            {
                path : "/about",
                element : <About></About>
            },
            
            
        ]
    }
])

export default Routes