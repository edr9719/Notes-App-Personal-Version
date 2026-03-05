import type { ButtonProps } from './types/types';

const Button = ({ onClick, label, styles, disabled = false }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles} px-4 font-bold rounded-lg p-2 font-Barriecito hover:scale-115`}
    >
      {label}
    </button>
  );
};

export default Button;
