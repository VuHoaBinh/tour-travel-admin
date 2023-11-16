import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { profileSelector } from 'reducers/profileSlice';
import { authRoute, privateRoute } from 'routes';

const AuthLayout = () => {
  const navigator = useNavigate();
  const { isLoggedIn } = useSelector(profileSelector);

  useEffect(() => {
    if (isLoggedIn) {
      navigator(privateRoute.home.path, { replace: true });
    }
  }, [isLoggedIn, navigator]);

  return (
    <main className='flex items-center justify-center'>
      <Routes>
        {Object.values(authRoute).map(({ path, component: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route path='/*' element={<Navigate to={authRoute.login.path} />} />
      </Routes>
    </main>
  );
};

export default AuthLayout;
