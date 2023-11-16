import { Backdrop, Box, BoxProps, CircularProgress } from '@mui/material';

type SpinnerType = BoxProps & {
  loading?: boolean;
  icon?: JSX.Element;
};

const Spinner = ({ loading, icon, children, ...props }: SpinnerType) => {
  return (
    <Box sx={{ position: 'relative' }} {...props}>
      {children}
      <Backdrop
        open={loading ?? false}
        sx={{
          position: 'absolute',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(18, 18, 18, 0.05)',
        }}
      >
        {icon ?? <CircularProgress />}
      </Backdrop>
    </Box>
  );
};

export default Spinner;
