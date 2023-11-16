import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
  isErrorException?: boolean;
  messageError?: string;
  onRedirect?: () => void;
};

const ErrorPage = ({ onRedirect }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex min-h-screen justify-center bg-black/20'>
        <div className='my-auto flex w-80 flex-col items-center'>
          <img src={require('assets/images/404.png')} />
          <div className='mt-6 text-center'>
            <div className='text-xl font-medium'>Oops!</div>
            <span className='text-sm'>We've run into an issue. Please try again later.</span>
          </div>
          <Button
            variant='contained'
            onClick={() => {
              navigate('/');
              onRedirect?.();
            }}
            className='mt-6'
          >
            Go to homepage
          </Button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
