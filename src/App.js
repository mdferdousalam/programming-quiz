import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Blog from "./components/Blogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from "./components/Statistics";
import Home from "./components/Home";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
