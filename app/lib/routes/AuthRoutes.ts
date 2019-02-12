import {
  FingerprintRounded as LoginIcon,
  SettingsBackupRestoreRounded as RecoveryIcon,
  InputRounded as SignUpIcon,
} from '@material-ui/icons';
import { RouteGroup } from 'lib/routes';

const AuthRoutes: RouteGroup = {
  login: {
    label: 'Log In',
    href: '/auth/login',
    Icon: LoginIcon,
  },
  recovery: {
    label: 'Recovery',
    href: '/auth/recovery',
    Icon: RecoveryIcon,
  },
  signup: {
    label: 'Sign Up',
    href: '/auth/signup',
    Icon: SignUpIcon,
  },
};

export default AuthRoutes;
