import { Button, debounce, Grid, MenuItem, TextField } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

type Props = SearchController & {
  items: {
    label: string;
    key: string;
    isSelect?: boolean;
    options?: { code: string; label: string }[];
  }[];
  children?: React.ReactNode;
};

const CommonSearch = ({ items, onChange, children }: Props) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [params, setParams] = useState<Record<string, string>>({});

  const handleClickReset = () => {
    setValues({});
    setParams((params) =>
      Object.keys(params).reduce(
        (values, key) => ({
          ...values,
          [key]: undefined,
        }),
        {},
      ),
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeParams = useCallback(
    debounce((value) => {
      setParams((params) => ({ ...params, ...value }));
    }, 300),
    [],
  );

  useEffect(() => {
    onChange(params);
  }, [onChange, params]);

  return (
    <Grid container spacing={3} className='flex-1'>
      {items.map((item) => (
        <Grid item key={item.key} sm={3}>
          {!item.isSelect ? (
            <TextField
              fullWidth
              label={item.label}
              value={values[item.key] ?? ''}
              onChange={(event) => {
                setValues((values) => ({ ...values, [item.key]: event.target.value }));
                debounceChangeParams({ [item.key]: event.target.value });
              }}
            />
          ) : (
            <TextField
              fullWidth
              select
              label={item.label}
              value={values[item.key] ?? ''}
              onChange={(event) => {
                setValues((values) => ({ ...values, [item.key]: event.target.value }));
                debounceChangeParams({ [item.key]: event.target.value });
              }}
            >
              <MenuItem value=''>Tất cả</MenuItem>
              {item.options?.map((item, index) => (
                <MenuItem key={index} value={item.code}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Grid>
      ))}
      {children}

      <Grid item sm={3}>
        <Button variant='outlined' color='inherit' className='w-24' onClick={handleClickReset}>
          Xóa
        </Button>
      </Grid>
    </Grid>
  );
};

export default CommonSearch;
