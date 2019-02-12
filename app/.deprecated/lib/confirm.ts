import { openConfirmDialog } from 'components/Confirm';

export default function confirm({
  title,
  message,
  onAnswer,
}: {
  title: string;
  message: string;
  onAnswer: Function;
}) {
  openConfirmDialog({ title, message, onAnswer });
}
