import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BrowserHome from './pages/browser/Home.browser.page';
import MobileHome from './pages/mobile/Home.mobile.page';
import Waiting from './pages/Waiting.page';


function App() {
  const [active, setActive] = useState(true)
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      console.log((elementRef.current as any).offsetWidth)
      setWidth((elementRef.current as any).offsetWidth)
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div ref={elementRef}>
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
    </div>

  );
}

export default App;
