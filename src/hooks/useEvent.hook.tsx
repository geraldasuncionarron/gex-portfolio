import { useEffect, useContext } from 'react';

import { EventContext } from '../providers/Event.provider';

const useEvent = (event: unknown, callback: unknown) => {
  const [subscribe, unsubscribe, _dispatch] = useContext(EventContext);

  useEffect(() => {
    subscribe(event, callback);

    return () => unsubscribe(event, callback);
  }, [subscribe, unsubscribe, event, callback]);
};

export default useEvent;