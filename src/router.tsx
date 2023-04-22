import {
 createBrowserRouter
} from "react-router-dom";
import {Home} from "./template/home";
import {About} from "./template/about";
import App from "./App";

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"/home",
                element: <Home />
            },
            {
                path:"/about",
                element: <About />
            }
        ]

    }
],{
    basename: "",
    future: {
        v7_normalizeFormMethod: true
    },
    window: window
})

export default appRoutes;