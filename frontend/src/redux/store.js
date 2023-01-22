import { configureStore } from "@reduxjs/toolkit"
import sidebarslice from "./sidebar/sidebarSlice";
 const store=configureStore({
    reducer:{
        sidebar:sidebarslice
    }
})

export default store;