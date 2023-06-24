import { FC } from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'large';
  label: string;
  link: string;
}

export const Button: FC<ButtonProps> = ({
  primary = false,
  size = 'small',
  label,
  link,
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <Link to={`${link}`}>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      >
        <span>{label}</span>
      </button>
    </Link>
  );
};
