import { configureStore } from "@reduxjs/toolkit"
import sidebarslice from "./sidebar/sidebarSlice";
<<<<<<< HEAD
 const store=configureStore({
    reducer:{
        sidebar:sidebarslice
=======
import userslice from "./user/user"
 const store=configureStore({
    reducer:{
        sidebarToggle:sidebarslice,
        userData:userslice
>>>>>>> 67069672a1040d66f7d4eb77d8ac808be5e4935a
    }
})

export default store;