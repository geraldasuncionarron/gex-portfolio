import { useContext, useLayoutEffect, useRef, useState } from 'react';
import { MetaMaskProvider } from '@metamask/sdk-react';
import 'charts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MetamaskContext from './providers/Metamask.context';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContext, AuthProvider } from './providers/Auth.provider';
import RootRoutes from './routes/Root.routes';
import { Spinner } from 'react-bootstrap';
import { SocketProvider } from './providers/Socket.provider';

const router = createBrowserRouter(RootRoutes);

function App() {
  const [active, setActive] = useState(true)
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);
  const authContext = useContext(AuthContext);
  
  useLayoutEffect(() => {
    console.log("authContext.isAuthenticated", authContext.isAuthenticated )
    const handleResize = () => {
      setWidth((elementRef.current as any).offsetWidth)
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <AuthProvider>
      <MetaMaskProvider debug={true} sdkOptions={{
        dappMetadata: {
          name: "Metamask wallet",
          url: window.location.href
        }
        // Other options
      }}>
        <SocketProvider>
          <div ref={elementRef}>
            <MetamaskContext>
              <RouterProvider router={router} fallbackElement={<Spinner animation="border" />}/>
            </MetamaskContext>
          </div>
        </SocketProvider>
    </MetaMaskProvider>
    </AuthProvider>

  );
}

export default App;
