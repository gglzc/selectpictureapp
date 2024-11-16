import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrimeReactProvider } from "primereact/api";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PickImgPage from "./page/pickImgPage";

// 配置路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <PickImgPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
