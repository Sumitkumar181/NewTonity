import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home"
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog"
import NotFound from "../components/common/NotFound"
import BrandDesign from "../components/techServicePage/brand/BrandDesign";
import WebDevelopment from "../components/techServicePage/webdevelopment/WebDevelopment";
import UiuxDesign from "../components/techServicePage/uiuxpage/UiuxDesign";
import DigitalMarketing from "../components/techServicePage/digitalMarketing/DigitalMarketing";
import AppDevelopment from "../components/techServicePage/appdevelopment/AppDevelopment";


const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element:<Home/>
            },
            {
                path: "*",          
                element: <NotFound/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "/branding-design",
                element: <BrandDesign/>
            },
            {
                path: "/web-development",
                element: <WebDevelopment/>
            },
            {
                path: "/ui-ux-design",
                element: <UiuxDesign/>
            },
            {
                path: "/digital-marketing",
                element: <DigitalMarketing/>
            },
            {
                path: "/app-development",
                element: <AppDevelopment/>
            }  
        ]
    }
])


export default AppRoutes;