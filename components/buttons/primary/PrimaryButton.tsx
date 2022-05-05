import { ButtonHTMLAttributes } from 'react';

export interface IPrimaryButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  state?: 'primary' | 'secondary' | 'default';
  loading?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  inverted?: boolean;
}

const PrimaryButton: React.FC<IPrimaryButton> = (props: IPrimaryButton) => {
  const { loading, disabled, label, state, inverted, size, ...rest } = props;

  function getSize(size: any) {
    switch (size) {
      case 'xs':
        return 'px-2.5 py-1.5 text-xs rounded';
      case 'sm':
        return 'px-3 py-2 text-sm leading-4 rounded-md';
      case 'md':
        return 'px-4 py-2 text-sm rounded-md';
      case 'lg':
        return 'px-6 py-3 text-base rounded-md';
      default:
        return 'px-4 py-2 text-base rounded-md';
    }
  }

  function getState(state: any) {
    switch (state) {
      case 'primary':
        return 'border-transparent text-white bg-blue-600 hover:bg-blue-700';
      case 'secondary':
        return 'border-transparent text-blue-700 bg-blue-100 hover:bg-blue-200';
      case 'default':
        return 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50';
      default:
        return 'border-gray-300 text-gray-300 bg-transparent hover:bg-gray-800';
    }
  }

  return (
    <button
      type='submit'
      disabled={disabled || loading}
      className={`inline-flex items-center border shadow-sm font-medium focus:outline-none focus:ring-0 ${getSize(
        size
      )} ${getState(state)} ${
        disabled || loading
          ? 'cursor-not-allowed disabled:opacity-50'
          : 'cursor-pointer'
      }`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
