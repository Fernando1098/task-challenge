import { createBrowserRouter } from "react-router-dom";
import App from "../pages/home/App.tsx";
import Tasks from "../pages/tasks/Tasks.tsx";
import FakerList from "../pages/faker-list/FakerList.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/faker-list",
    element: <FakerList />,
  },
]);
