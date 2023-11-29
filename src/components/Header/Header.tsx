import AccountCircleIcon from '@suid/icons-material/AccountCircle';
import { A } from '@solidjs/router';

import cls from './styles';
import { logo } from '../../assets/images';

const Header = () => {
  return (
    <div class={cls.headerContainer}>
      <div class={cls.headerTitle}>
        <A href="/blogs">
          <img src={logo} alt={logo} style={{ width: '35%', height: 'auto' }} />
        </A>
      </div>
      <div class={cls.headerIcon}>
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
