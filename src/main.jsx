import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import  AppRoutes  from "./routes/AppRoutes";




ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRoutes} />
  </StrictMode>,
)
