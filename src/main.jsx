import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Contact from './Component/Contact/Contact';
import Packages from './Component/Packages/Packages';
import About from './Component/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/packages',
    element: <Packages></Packages>
    },
    {
      path:'/about',
      element: <About></About>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <React.StrictMode>

   <RouterProvider router={router} />
  </React.StrictMode>,
 
)
