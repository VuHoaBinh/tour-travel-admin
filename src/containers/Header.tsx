import { Logout, Menu } from '@mui/icons-material';
import { AppBar, Avatar, Button, Drawer, IconButton, Toolbar, Tooltip } from '@mui/material';
import { AppBreadcrumb, AppMenu } from 'containers';
import { useWindowSize } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { profileSelector, signOut } from 'reducers/profileSlice';
import { privateRoute } from 'routes';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isMobile } = useWindowSize();
  const { isLoggedIn, username } = useSelector(profileSelector);

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [location.pathname]);

  return (
    <>
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor='left'
        open={isMobile ? openDrawer : true}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ style: { width: '280px', padding: '8px 16px' } }}
      >
        <div className='flex h-[56px] items-center justify-center'>
          <Link to={privateRoute.home.path}>
            <span className='text-2xl font-bold text-red-500 hover:text-red-700'>HẬU ĐÀI</span>
          </Link>
        </div>
        <AppMenu />
      </Drawer>

      <AppBar position='sticky' className='bg-white' elevation={1}>
        <Toolbar>
          {isMobile && (
            <IconButton onClick={() => setOpenDrawer(true)} className='mr-2'>
              <Menu />
            </IconButton>
          )}
          <AppBreadcrumb />
          <div className='flex-1' />

          {isLoggedIn ? (
            <div className='flex flex-1 items-center justify-end'>
              <Tooltip title='Đăng xuất'>
                <IconButton className='mx-3' onClick={() => dispatch(signOut({}))}>
                  <Logout />
                </IconButton>
              </Tooltip>
              <Button variant='outlined' color='warning'>
                <Avatar className='mr-2 h-6 w-6 text-sm' />
                {username}
              </Button>
            </div>
          ) : (
            <Button variant='outlined'>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
