import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/global.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Specialities from './pages/Specialities.jsx'
import Contact from './pages/Contact.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/specialities', element: <Specialities /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
