import './App.css';
import { Outlet } from 'react-router-dom';

import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default App;
