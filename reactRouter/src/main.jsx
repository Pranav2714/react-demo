import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact_us/Contact.jsx";
import About from "./components/About us/About.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       { path: "about", element: <About /> },
//       { path: "contact-us", element: <Contact /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact-us" element={<Contact />}></Route>
      <Route path="user/:userId" element={<User />}></Route>
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
