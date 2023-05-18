import{createBrowserRouter} from "react-router-dom";
import Login from "./views/login.jsx";
import Signup from "./views/signup.jsx";
import NotFound from "./views/notFound.jsx";
import Users from "./views/users.jsx";
import DefaultLayout from "./components/Default.jsx";
import SecondaryLayout from "./components/Secondary.jsx";
import Dashboard from "./views/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children : [
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  },
  {
    path: '/',
    element: <SecondaryLayout/>,
    children:[
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
  // {
  //   path: '/signup',
  //   element: <Signup/>
  // },
])

export default router;