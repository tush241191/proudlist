import { HTMLAttributes } from 'react';
import IconButton from '../icon/IconButton';

export interface IPrimaryButton extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
  state: 'primary' | 'secondary' | 'default' | 'empty';
  disabled?: boolean;
  inverted?: boolean;
  icon?: 'lock' | 'delete' | 'edit' | 'filter';
}

const PrimaryButton: React.FC<IPrimaryButton> = (props: IPrimaryButton) => {
  const { disabled, label, state, inverted, size, icon, ...rest } = props;

  function getSize(size: string) {
    switch (size) {
      case 'xs':
        return 'px-2.5 py-1.5 text-xs rounded';
      case 'sm':
        return 'px-3 py-2 text-sm leading-4 rounded-md';
      case 'md':
        return 'px-4 py-2 text-sm rounded-md';
      case 'lg':
        return 'px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-md';
      default:
        return 'px-4 py-2 text-sm md:text-base rounded-md';
    }
  }

  function getState(state: string) {
    switch (state) {
      case 'primary':
        return 'border-transparent text-white bg-blue-600 hover:bg-blue-700';
      case 'secondary':
        return 'border-transparent text-blue-700 bg-blue-100 hover:bg-blue-200';
      case 'default':
        return 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50';
      case 'empty':
        return 'border-gray-300 text-gray-300 bg-transparent hover:bg-gray-800';
    }
  }

  function getIconColor(state: string) {
    switch (state) {
      case 'primary':
        return 'empty';
      case 'secondary':
        return 'primary';
      case 'default':
        return 'default';
      case 'empty':
        return 'default';
      default:
        return 'default';
    }
  }

  return (
    <button
      type='button'
      disabled={disabled}
      className={`group relative flex w-full items-center justify-center border shadow-sm font-medium focus:outline-none focus:ring-0 ${getSize(
        size
      )} ${getState(state)} ${
        disabled ? 'cursor-not-allowed disabled:opacity-50' : 'cursor-pointer'
      }`}
      {...rest}
    >
      {icon && state && (
        <>
          <span className='absolute left-0 inset-y-0 flex items-center pl-2'>
            <IconButton
              category={icon}
              iconSize={size}
              state={getIconColor(state)}
            />
          </span>
        </>
      )}
      <label
        className={`${icon ? 'ml-1' : ''} ${
          disabled ? 'cursor-not-allowed disabled:opacity-50' : 'cursor-pointer'
        }`}
      >
        {label}
      </label>
    </button>
  );
};

export default PrimaryButton;
