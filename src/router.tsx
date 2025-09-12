import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import LoveJar from './pages/LoveJar';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/result', element: <Result /> },
  { path: '/jar', element: <LoveJar /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
