import { useCallback, useState } from 'react';

const useAnchor = (init = null) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(init);
  const open = Boolean(anchorEl);

  const onOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return [anchorEl, open, onOpen, onClose] as [
    HTMLElement,
    boolean,
    (event: React.MouseEvent<HTMLElement>) => void,
    () => void,
  ];
};

export default useAnchor;
