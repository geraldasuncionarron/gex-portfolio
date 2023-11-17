import { useState } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import './App.css';
import BrowserHome from './pages/browser/Home.browser.page';
import MobileHome from './pages/mobile/Home.mobile.page';
import Waiting from './pages/Waiting.page';


function App() {
  const [active, setActive] = useState(true)
  return (
    <>
      {
        active ?
        <> 
          { 
            isBrowser ?
            <BrowserHome />
            : 
            <MobileHome />
          }
        </>
          : <Waiting />
      }
    </>

  );
}

export default App;
