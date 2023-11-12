import { useState } from 'react';
import './App.css';
import Home from './pages/Home.page';
import Waiting from './pages/Waiting.page';


function App() {
  const [active, setActive] = useState(false)
  return (
    <>
      {
        active ? <Home />: <Waiting />
      }
    </>

  );
}

export default App;
