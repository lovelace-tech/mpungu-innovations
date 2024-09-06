import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./pages/AppLayout/AppLayout"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Home from "./pages/Home/Home"

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App