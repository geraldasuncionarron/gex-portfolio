import { useContext } from 'react';

import { EventContext } from '../providers/Event.provider';

const useEventDispatch = () => {
  const [_subscribe, _unsubscribe, dispatch] = useContext(EventContext);

  return dispatch;
};

export default useEventDispatch;