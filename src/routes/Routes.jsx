import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart";
import ConfirmPage from "../Pages/ConfirmPage/ConfirmPage";

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
                path : "/orders",
                element : <Orders></Orders>
            },
            
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/cart",
                element : <Cart></Cart>
            },
            {
                path : "/confirm",
                element : <ConfirmPage></ConfirmPage>
            },
            
            
        ]
    }
])

export default Routes