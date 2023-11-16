import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { notificationSelector } from 'reducers/notificationSlice';

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { message, variant, key, onUpdate } = useSelector(notificationSelector);

  const lastUpdate = useRef(onUpdate);

  useEffect(() => {
    if (onUpdate && lastUpdate.current !== onUpdate) {
      lastUpdate.current = onUpdate;
      enqueueSnackbar(message, { variant, key });
    }
  }, [enqueueSnackbar, message, variant, key, onUpdate]);
};

export default useNotification;
