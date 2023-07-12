import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/PageOne/PageOne";
import PageTwo from "./pages/PageTwo/PageTwo";
import PageThree from "./pages/PageThree/PageThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />,
  },
  {
    path: "/user-form",
    element: <PageTwo />,
  },
  {
    path: "/user/:userId",
    element: <PageThree />,
  },
]);

function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
