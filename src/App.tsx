import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Projects } from "./components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/projects",
    element: <Projects />
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
