import { FieldControl } from 'components';
import { FieldControlProps } from 'components/Form/FieldControl';

interface InputControlProps extends FieldControlProps {
  placeholder: string;
}

const InputControl: React.SFC<InputControlProps> = props => <FieldControl input {...props} />;

InputControl.defaultProps = {
  // placeholder: 'Search...',
};

/**
 * Exports
 */
export { InputControl, InputControlProps };
