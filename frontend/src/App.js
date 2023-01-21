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
      </Route>
    )
  )
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
