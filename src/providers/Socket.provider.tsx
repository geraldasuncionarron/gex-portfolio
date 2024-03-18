import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRiZDVlNzI2NGYxYzVmNjFjMDY2MGYiLCJpYXQiOjE3MDg5MDU5NTl9.LOGQOm6DGlGKU9njsTKRlkhwxF2uwAfm6vLycCDbXOg";

export const SocketContext = createContext({
    socket: null,
    send: (data:  any) => {}
});

const SocketProvider = ({ children }: any) => {
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        const socketInstance = io('http://localhost:8000', {
            auth: {
                token: AUTH_TOKEN
            },
            transports: ["websocket", "polling"]
        });
        setSocket(socketInstance);
      
        // listen for events emitted by the server
      
        socketInstance.on('connect', () => {
          console.log('Connected to server');
        });
      
        socketInstance.on('ping', (data: any) => {
          console.log(`Received message: ${data}`);
        });

        socketInstance.on("error", (error: any) => {
            console.error(`Received message: ${error}`);
        });
      
        return () => {
          if (socketInstance) {
            socketInstance.disconnect();
          }
        };
      }, []);

      const send = async (data: any) => {
        await (socket as any).emit("events", data);
      }
  return (
    <SocketContext.Provider value={{ socket, send }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => useContext(SocketContext);

export { SocketProvider, useSocket };