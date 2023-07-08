import { FC } from 'react';
import Typography from '../Typography/Typography';
import './button.scss';

type ButtonProps = {
  primary?: boolean;
  size?: 'small' | 'large';
  label: string;
}

export const ButtonUI: FC<ButtonProps> = ({
  primary = false,
  size = 'small',
  label,
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    >
      <Typography size='small' text={label} key={Math.random().toFixed(12).toString()} weight='bold' />
    </button>
  );
};
