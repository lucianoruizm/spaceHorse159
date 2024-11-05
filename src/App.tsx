import { useRoutes, RouteObject } from 'react-router-dom';
import './App.css'
import routes from './routes';

const App: React.FC = () => {
  const content = useRoutes(routes as RouteObject[])

  return (
    <>
      {content}
    </>
  )
}

export default App;
