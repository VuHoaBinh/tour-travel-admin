import { LoadingButton } from '@mui/lab';
import { Container, Paper, TextField } from '@mui/material';
import { InputPassword } from 'components';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authRoute } from 'routes';

const RegisterScreen = () => {
  const { control, watch } = useForm({ mode: 'onChange' });
  const { password } = watch();

  return (
    <Container maxWidth='sm'>
      <Paper className='flex flex-col gap-10 p-8'>
        <Controller
          name='username'
          defaultValue=''
          control={control}
          rules={{
            required: 'Tên tài khoản không được để trống',
            minLength: { value: 6, message: 'Tài khoản có ít nhất 6 ký tự' },
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
            minLength: { value: 6, message: 'Mật khẩu có ít nhất 6 ký tự' },
          }}
          render={({ field, fieldState: { error } }) => (
            <InputPassword
              {...field}
              fullWidth
              variant='standard'
              label='Mật khẩu'
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name='passwordConfirm'
          defaultValue=''
          control={control}
          rules={{
            required: 'Mật khẩu không hợp lệ',
            validate: {
              match: (value) => value === password || 'Mật khẩu không khớp',
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <InputPassword
              {...field}
              fullWidth
              variant='standard'
              label='Xác nhận mật khẩu'
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <LoadingButton fullWidth variant='contained'>
          Đăng ký
        </LoadingButton>

        <div className='mt-[-20px] flex justify-center space-x-2'>
          <span>Đã có tài khoản?</span>
          <Link className='font-medium hover:text-primary-main' to={authRoute.login.url}>
            Đăng nhập
          </Link>
        </div>
      </Paper>
    </Container>
  );
};

export default RegisterScreen;
