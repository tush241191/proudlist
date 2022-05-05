import { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder?: string;
  state?: 'primary' | 'secondary' | 'default';
  loading?: boolean;
  inverted?: boolean;
}

const Input: React.FC<IInput> = (props: IInput) => {
  const {
    id,
    name,
    placeholder,
    state,
    disabled,
    loading,
    size,
    inverted,
    ...rest
  } = props;

  function getState(state: any) {
    switch (state) {
      case 'primary':
        return 'focus:border-blue-600';
      case 'secondary':
        return 'focus:border-blue-100';
      case 'default':
        return 'focus:border-gray-600';
      default:
        return 'focus:border-indigo-500';
    }
  }

  return (
    <input
      type='text'
      name='first-name'
      id='first-name'
      autoComplete='given-name'
      placeholder={placeholder}
      className={`block w-full sm:text-sm border-0 border-b border-gray-300 focus:ring-0 ${getState(
        state
      )} ${
        disabled || loading
          ? 'cursor-not-allowed disabled:opacity-50'
          : 'cursor-pointer'
      }`}
      {...rest}
    />
  );
};

export default Input;
