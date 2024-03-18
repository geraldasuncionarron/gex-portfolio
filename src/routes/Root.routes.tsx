import { Route, RouteObject, createRoutesFromElements } from "react-router";
import ErrorBoundary from "../error/ErrorBoundary.error";
import Home from "../pages/portfolio/browser/Home.browser.page"
import Admin from "../pages/chatbots/Dashboard.page";
import LandingProduct from "../pages/chatbots/LandingProduct.page";
import Login from "../pages/chatbots/Login.page";
import DashboardRoutes from "./dashboard/Dashboard.routes";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/chatbots/views/Dashboard";
import Register from "../pages/chatbots/Register.page";

const RootRoutes: RouteObject[] = [
    {
      path: "/",
      Component: Home,
    },{
        path: "product",
        Component: LandingProduct,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "login",
        Component: Login,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "register",
        Component: Register,
        errorElement: <ErrorBoundary />,
    },
    {
      path: "chatlink",
      Component: Admin,
      loader: async ({ request, params }: any) => {
        console.log("loading data...")
        //check authentication
        return fetch(
          `fake_data/dashboard.json`,
          { signal: request.signal }
        );
      },
      errorElement: <ErrorBoundary />,
      children: DashboardRoutes,
    },
];

export default RootRoutes

