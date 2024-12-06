import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import ResourcesAll from "./pages/ResourcesAll";
import ResourcesInfo from "./pages/ResourcesInfo";
import ResourcesMath from "./pages/ResourcesMath";
import ResourcesStats from "./pages/ResourcesStats";
import ResourceDetail from "./pages/ResourceDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "resources",
        element: <Resources />,
        children: [
          { path: "all", element: <ResourcesAll /> },
          { path: "info", element: <ResourcesInfo /> },
          { path: "math", element: <ResourcesMath /> },
          { path: "stats", element: <ResourcesStats /> },
          { path: ":id", element: <ResourceDetail /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
