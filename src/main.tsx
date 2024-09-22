import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TestPikts from './testPikts.tsx';
import TestZifras from './testZifras.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/firstTest",
        element: <TestPikts/>
      },
      {
        path: "/secondTest",
        element: <TestZifras/>,
      }
    ]
  }
  
]
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

