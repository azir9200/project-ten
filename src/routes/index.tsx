import App from "@/App";
import Home from "@/components/pages/Home";
import Task from "@/components/pages/Task";
import User from "@/components/pages/User";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/user",
        Component: User,
      },
      {
        path: "/task",
        Component: Task,
      },
    ],
  },
]);
export default router;
