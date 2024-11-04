import { AppProvider } from 'providers/application';
import { RouterProvider } from 'providers/routes';
import { HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <RouterProvider />
      </HashRouter>
    </AppProvider>
  );
}

export default App;

