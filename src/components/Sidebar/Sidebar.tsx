import { A } from '@solidjs/router';
import { ArrowBackIos, ArrowForwardIos } from '@suid/icons-material';
import HomeIcon from '@suid/icons-material/Home';
import BookIcon from '@suid/icons-material/Book';
import PeopleIcon from '@suid/icons-material/People';
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@suid/material';
import { For, createSignal } from 'solid-js';

import cls from './styles';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = createSignal(false);

  const menuItems = [
    { label: 'Dashboard', icon: <HomeIcon />, path: '/dashboard' },
    { label: 'Users', icon: <PeopleIcon />, path: '/users' },
    { label: 'Blogs', icon: <BookIcon />, path: '/blogs' },
  ];

  // const getColor = (curr: string) => {
  //   if (location.pathname.includes(curr)) {
  //     // eslint-disable-next-line no-console
  //     console.log('if--');
  //     return '#6A6A6A';
  //   }
  //   return '#FF0000';
  // };

  const sidebarList = () => {
    return (
      <Box>
        <For each={menuItems}>
          {(item) => (
            <MenuList color="black">
              <MenuItem>
                <A
                  href={item.path}
                  class="h-12 w-full flex items-center"
                  // style={{ color: getColor(item.path) }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {!isCollapsed() && <ListItemText>{item.label}</ListItemText>}
                </A>
              </MenuItem>
            </MenuList>
          )}
        </For>
      </Box>
    );
  };

  return (
    <div class={cls.container}>
      <button
        class={cls.toggleButton}
        onClick={() => setIsCollapsed(!isCollapsed())}
      >
        {isCollapsed() ? <ArrowBackIos /> : <ArrowForwardIos />}
      </button>
      <div class={cls.content(isCollapsed())}>{sidebarList()}</div>
    </div>
  );
};
export default Sidebar;
