import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import SayisalLoto from "~/pages/sayisal-loto";
import SansTopu from "~/pages/sans-topu";
import OnNumara from "~/pages/on-numara";
import MilliPiyango from "~/pages/milli-piyango";
import SuperLoto from "~/pages/super-loto";
import Sonuclar from "~/pages/sonuclar";
import Kazananlar from "~/pages/kazananlar";
import PiyangoTV from "~/pages/piyango-tv";
import MainLayout from "~/layouts/main";
import NotFound from "~/pages/not-found";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "sayisal-loto",
                element: <SayisalLoto />,
            },
            {
                path: "super-loto",
                element: <SuperLoto />,
            },
            {
                path: "on-numara",
                element: <OnNumara />,
            },
            {
                path: "sans-topu",
                element: <SansTopu />,
            },
            {
                path: "milli-piyango",
                element: <MilliPiyango />,
            },
            {
                path: "sonuclar",
                element: <Sonuclar />,
            },

            {
                path: "kazananlar",
                element: <Kazananlar />,
            },
            {
                path: "piyango-tv",
                element: <PiyangoTV />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default routes
