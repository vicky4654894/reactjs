import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import { getGithubData } from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>} ></Route>
      <Route path='about' element={<About/>} ></Route>
      <Route path='contact' element={<Contact/>} ></Route>
      <Route path='user/:userId' element={<User/>} ></Route>
      <Route path='github'  loader={getGithubData} element={<Github/>} ></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
   
  </React.StrictMode>,
)
