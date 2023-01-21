import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar'
import Directory from './components/Directory';
import RestaurantPage from './pages/RestaurantPage';
import PageNotFound from './components/PageNotFound';
import ForgotPassword from './components/ForgotPassword';
<<<<<<< HEAD
import Footer from './components/Footer';
import CartPage from './pages/CartPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} errorElement={<PageNotFound />}>
        <Route index element={<Directory />} />
        <Route path="restaurant" element={<RestaurantPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="cartpage" element={<CartPage />} />
=======
import SearchPage from './pages/SearchPage';


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<><Navbar/><Home/></>}>
        <Route index element={<Directory/>}/>
        <Route path="restaurant" element={<RestaurantPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/search" element={<SearchPage />} />
>>>>>>> 67069672a1040d66f7d4eb77d8ac808be5e4935a
      </Route>
    )
  )
  return (
    <div>
<<<<<<< HEAD
      <RouterProvider router={router} />
=======
     <RouterProvider router={router} />
>>>>>>> 67069672a1040d66f7d4eb77d8ac808be5e4935a
    </div>
  );
}

export default App;
