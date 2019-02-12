import { openSnackbar } from '@components/notifications';

export default function notify(obj) {
  openSnackbar({ message: obj.message || obj.toString() });
}
