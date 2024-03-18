import { RouteObject } from "react-router";
import Dashboard from "../../pages/chatbots/views/Dashboard";
import Upgrade from "../../pages/chatbots/views/Upgrade";
import UserProfile from "../../pages/chatbots/views/UserProfile";
import Agents from "../../pages/chatbots/views/Agents";
import CreateCustomAgent from "../../pages/chatbots/views/CreateCustomAgent";
import Settings from "../../pages/chatbots/views/Settings";
import axios from "axios";
import { useAuth } from "../../providers/Auth.provider";

const DashboardRoutes: RouteObject[] = [
    {
      path: "dashboard",
      Component: Dashboard,
      loader: () => { return true },
    },{
      path: "upgrade",
      Component: Upgrade,
      loader: () => { return true },
    },
    {
      path: "agents",
      Component: Agents,
      loader: async() => { return true },
    },
    {
      path: "create",
      Component: CreateCustomAgent,
      loader: () => { return true },
    },
    {
      path: "user",
      element: <UserProfile />,
      loader: () => { return true },
    },
    {
      path: "settings",
      element: <Settings />,
      loader: () => { return true },
    }
];

const layout = "/chatlink";
export const DashboardComponents = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: { name: "star", size: "1x" },
    component: Upgrade,
    layout: layout
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: { name: "home", size: "1x" },
    component: Dashboard,
    layout: layout
  },
  {
    path: "/agents",
    name: "Agents",
    icon: { name: "agent", size: "1x" },
    component: Agents,
    layout: layout
  },
  {
    path: "/create",
    name: "Create bot",
    icon: { name: "plus", size: "1x" },
    component: CreateCustomAgent,
    layout: layout
  },  {
    path: "/user",
    name: "User Profile",
    icon: { name: "user", size: "1x" },
    component: UserProfile,
    layout: layout
  },  {
    path: "/settings",
    name: "Settings",
    icon: { name: "settings", size: "1x" },
    component: Settings,
    layout: layout
  }
];

  export default DashboardRoutes;