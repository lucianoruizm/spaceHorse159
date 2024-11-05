import { RouteObject } from 'react-router-dom';
import PressToStart from './components/PressToStart';
import TransitionToHome from './components/TransitionToHome';
import LandingPage from './pages/LandingPage';

const routes: RouteObject[] = [
  {
    path: "/*",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <PressToStart />,
  },
  {
    path: "/transitionToHome",
    element: <TransitionToHome />,
  },
];

export default routes;
