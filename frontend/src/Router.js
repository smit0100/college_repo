import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import ForgotPassword from "./components/ForgotPassword";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><Navbar /> <Home /> </>,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/contect",
//     element: <>contect</>,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />} errorElement={<PageNotFound />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="contact" element={<p>Contact page</p>} />
      </Route>
    </>

  )
)

export default router;