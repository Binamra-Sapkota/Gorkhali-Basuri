import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Specialities from './pages/Specialities.jsx';
import Contact from './pages/Contact.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/home', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/services', element: <Services />},
  {path: '/specialities', element: <Specialities />},
  {path: '/contact', element: <Contact />},
  {path: '*', element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)