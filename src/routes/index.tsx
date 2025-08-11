import About from "@/About";
import App from "@/App";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
    Component: About,
      }
    ]
  },

]);