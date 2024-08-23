import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/index.tsx";
import NavigationStore from "./components/context/navigation.tsx";
import Login from "./pages/login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationStore>
      <RouterProvider router={router} />
    </NavigationStore>
  </React.StrictMode>
);
