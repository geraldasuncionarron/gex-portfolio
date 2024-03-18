// EventContext.js
import { createContext, useCallback, useMemo, useReducer, useRef } from 'react';

export const EventContext = createContext([
  (_event: any, _cb: any) => {}, // subscribe
  (_event: any, _cb: any) => {}, // unsubscribe
  (_event: any, _payload: any) => {}, // dispatch
]);

const EventProvider = ({ children }: any) => {
    const [subscribers, dispatch] = useReducer((state: { [x: string]: any[]; }, action: { type?: any; event?: any; callback?: any; }) => {
        const { type, event } = action;
        switch (type) {
          case 'subscribe': {
            const { callback } = action;
            if (event in state) {
              if (state[event].includes(callback)) {
                return state;
              }
              return { ...state, [event]: [...state[event], callback] };
            }
            return { ...state, [event]: [callback] };
          }
    
          case 'unsubscribe': {
            const { callback } = action;
            if (event in state && state[event].includes(callback)) {
              return { ...state, [event]: [...state[event].filter(cb => cb !== callback)] };
            }
            return state;
          }
    
          default:
            throw new Error();
        }
      }, {}, () => ({}));
    
      const subscribersRef = useRef({});
    
      subscribersRef.current = useMemo(() => subscribers, [subscribers]);
      
      const subscribe = useCallback(
        (event: any, callback: any) => {
          dispatch({ type: 'subscribe', event, callback });
        },
        [dispatch],
      );
    
      const unsubscribe = useCallback(
        (event: any, callback: any) => {
          dispatch({ type: 'unsubscribe', event, callback });
        },
        [dispatch],
      );
    
      const dispatchEvent = useCallback((event: string, payload: any) => {
        if (event in subscribersRef?.current) {
          (subscribersRef as any).current[event].forEach((cb: (arg0: any) => any) => cb(payload));
        }
      }, [subscribersRef]);
    
      const eventPack = useMemo(
        () => ([subscribe, unsubscribe, dispatchEvent]),
        [subscribe, unsubscribe, dispatchEvent],
      );
    

  return (
    <EventContext.Provider value={eventPack}>
      {children}
    </EventContext.Provider>
  );
};
export default EventProvider;