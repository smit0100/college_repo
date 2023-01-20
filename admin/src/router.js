import { createBrowserRouter } from "react-router-dom"
import CardStats from "./componenet/CardStats"
import UserDropdown from "./componenet/DropDown"
import HeaderStats from "./componenet/HeaderStats"
const router = createBrowserRouter([
    {
        path: "/card",
        element:<CardStats/>,
      }, {
        path: '/first',
        element:<UserDropdown/>
    }, {
        path: '/Header',
        element:<HeaderStats/>
    }
])

export default router