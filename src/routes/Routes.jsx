import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import ConfirmPage from "../Pages/ConfirmPage/ConfirmPage";
import About from "../Pages/About/About";
import CheckOutForm from "../Pages/CheckOutForm/CheckOutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PQB3IRxk5CsR8tQa4ENZG9AuQge8zIvwjUuUuuc483AdzXebuqudvjlEdBDLN5M3tt8xsUmx6cU1Jcp80wUzLsS00P7HKArHj"
);

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/confirm",
        element: <ConfirmPage></ConfirmPage>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/payment",
        element: (
          <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
          </Elements>
        ),
      },
    ],
  },
]);

export default Routes;
