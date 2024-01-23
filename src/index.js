import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projact from './reactprojact/Reactprojact';
import Allhome from './home/Allhome';
import Allinfo from './info/Allinfo';
import Allfeedback from './feedback/Allfeedback';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
       <Projact/>
      </div>
    ),
  },
  {
    path: "home",
    element: (
      <div>
       <Allhome/>
      </div>
    ),
  },
  {
    path: "info",
    element: (
      <div>
       <Allinfo/>
      </div>
    ),
  },
  {
    path: "feedback",
    element: (
      <div>
      <Allfeedback/>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);


