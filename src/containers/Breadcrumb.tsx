import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs } from '@mui/material';
import { useWindowSize } from 'hooks';
import { useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';

const Breadcrumb = () => {
  const location = useLocation();
  const { isMobile } = useWindowSize();

  const routes = (location.pathname.match(/\/[\w-]+/g) ?? [])
    .map((_, index, array) => array.slice(0, index + 1).join(''))
    .map((item) => Object.values(privateRoute).find((route) => item === route.path))
    .filter((item) => item?.name);

  if (isMobile) return null;
  return (
    <div className='flex items-center space-x-1'>
      <Breadcrumbs separator={<NavigateNext fontSize='small' className='text-primary-dark' />}>
        {routes.map((item, index) => (
          <div key={index} className='text-xl font-medium text-primary-dark'>
            {item?.name}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
