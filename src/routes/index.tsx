import App from "@/App";
import Home from "@/components/pages/home/Home";
import Question from "@/components/pages/quiz/Question";
import QuizControls from "@/components/pages/quiz/QuizControls";
import Task from "@/components/pages/Task/Tasks";
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
      {
        path: "/quiz",
        Component: Question,
      },
      // {
      //   path: "/task",
      //   Component: QuizControls,
      // },
    ],
  },
]);
export default router;
