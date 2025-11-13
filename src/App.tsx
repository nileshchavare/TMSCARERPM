import './App.css';
import { RouterProvider } from 'react-router-dom';
import { privateRoutes } from './routes/routes';

function App() {
  return (
    <RouterProvider
      router={privateRoutes}
    />
  );
}

export default App;
