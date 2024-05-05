import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthContextComponent from "./AuthProvider/AuthContextComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextComponent>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextComponent>
  </React.StrictMode>
);
