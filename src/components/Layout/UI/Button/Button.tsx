import { FC } from 'react';
import './button.scss';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'large';
  label: string;
}

export const Button: FC<ButtonProps> = ({
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
      <span>{label}</span>
    </button>
  );
};
