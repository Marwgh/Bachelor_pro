import{createBrowserRouter} from "react-router-dom";
import Login from "./views/login.jsx";
import Signup from "./views/signup.jsx";
import NotFound from "./views/notFound.jsx";
import Profile from "./views/profile.jsx";
import DefaultLayout from "./components/Default.jsx";
import Open from "./components/Open.jsx";
import SecondaryLayout from "./components/Secondary.jsx";
import Dashboard from "./views/dashboard.jsx";
import UserForm from "./views/userForm.jsx";
import Home from "./views/home.jsx";
import Quizz from "./views/quizz.jsx";
import Blog from "./views/blog.jsx";
import AboutUs from "./views/aboutUs.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children : [
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate"/>
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate"/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  },
  {
  path: '/',
  element: <Open/>,
  children:[
    {
      path: '/home',
      element: <Home/>,
    },
    {
      path: '/quizz',
      element: <Quizz/>,
    },
    {
      path: '/blog',
      element: <Blog/>,
    },
    {
      path: '/aboutUs',
      element: <AboutUs/>,
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