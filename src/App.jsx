import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout/Layout";
import Error from "./components/ui/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import CountryDetails from "./components/layout/CountryDetails";
import AddCountry from "./pages/TodoCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/name/:id",
        element: <CountryDetails />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/todo-country",
        element: <AddCountry />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
