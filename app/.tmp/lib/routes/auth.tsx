import {
  Fingerprint as LoginIcon,
  SettingsBackupRestore as RecoveryIcon,
  Input as SignUpIcon,
} from '@material-ui/icons';

import { Routes } from '@lib/routes';

const routes: Routes = {
  login: {
    label: 'Log In',
    href: '/auth/login',
    icon: LoginIcon,
  },
  recovery: {
    label: 'Recovery',
    href: '/auth/recovery',
    icon: RecoveryIcon,
  },
  signup: {
    label: 'Sign Up',
    href: '/auth/signup',
    icon: SignUpIcon,
  },
};

export default routes;
