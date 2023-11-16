import { LoadingButton } from '@mui/lab';
import { Container, Paper, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { InputPassword } from 'components';
import { useSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, signOut } from 'reducers/profileSlice';
import { authRoute } from 'routes';
import { authService, userService } from 'services';
import { RoleEnum } from 'utils/enum';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const { mutate: login, isPending } = useMutation({
    mutationFn: authService.login,
    onSuccess: (data: LoginResponse) => {
      dispatch(signIn(data));
      userService.getProfile().then((profile) => {
        if (profile.role === RoleEnum.ADMIN) {
          dispatch(signIn(profile));
        } else {
          enqueueSnackbar('Please login to continue as an Administrator', { variant: 'error' });
          dispatch(signOut({}));
        }
      });
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleClickSubmit();
    }
  };

  const handleClickSubmit = () => {
    handleSubmit((values) => {
      login(values as LoginBody);
    })();
  };

  return (
    <Container maxWidth='sm'>
      <Paper className='flex flex-col gap-10 p-8'>
        <Controller
          name='username'
          defaultValue=''
          control={control}
          rules={{
            required: 'Tên tài khoản không được để trống',
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              variant='standard'
              label='Tên tài khoản'
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name='password'
          defaultValue=''
          control={control}
          rules={{
            required: 'Mật khẩu không được để trống',
          }}
          render={({ field, fieldState: { error } }) => (
            <InputPassword
              {...field}
              fullWidth
              variant='standard'
              label='Mật khẩu'
              onKeyDown={handleKeyDown}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <LoadingButton fullWidth variant='contained' loading={isPending} onClick={handleClickSubmit}>
          Đăng nhập
        </LoadingButton>

        <div className='mt-[-20px] flex justify-center space-x-2'>
          <span>Bạn chưa có tài khoản?</span>
          <Link className='font-medium hover:text-primary-main' to={authRoute.register.url}>
            Đăng ký
          </Link>
        </div>
      </Paper>
    </Container>
  );
};

export default LoginScreen;
