import { ArrowDropDown, ArrowLeft, SettingsOutlined } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';

const StyledListItem = styled(ListItemButton)({
  borderRadius: '8px !important',
  padding: '4px 12px !important',
  '&:hover': {
    backgroundColor: 'var(--color-primary-dark) !important',
    color: '#fff',
  },
  '&.Mui-selected': {
    backgroundColor: 'var(--color-primary-main) !important',
    color: '#fff',
  },
  '& .MuiSvgIcon-root': {
    marginRight: 8,
  },
  '& .MuiListItemText-primary': {
    fontWeight: 500,
  },
});

type SubMenuType = {
  path: string;
  name?: string;
  icon?: JSX.Element;
};

type MenuItemProps = SubMenuType & {
  items?: SubMenuType[];
  visible?: boolean;
};

const MenuItem = ({ path, name, icon, items }: MenuItemProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(location.pathname.startsWith(path));

  return (
    <>
      {items ? (
        <StyledListItem onClick={() => setOpen((open) => !open)}>
          {icon}
          <ListItemText>{name}</ListItemText>
          {!open ? <ArrowLeft /> : <ArrowDropDown />}
        </StyledListItem>
      ) : (
        <Link to={path}>
          <StyledListItem selected={location.pathname.startsWith(path)}>
            {icon}
            <ListItemText>{name}</ListItemText>
          </StyledListItem>
        </Link>
      )}

      {items && (
        <Collapse in={open}>
          <List disablePadding className='List-chips ml-3'>
            {items?.map((sub, index) => <MenuItem key={index} {...sub} visible />)}
          </List>
        </Collapse>
      )}
    </>
  );
};

const Menu = () => {
  return (
    <List className='flex flex-col gap-1'>
      <MenuItem {...privateRoute.home} icon={<SettingsOutlined />} />
    </List>
  );
};

export default Menu;
