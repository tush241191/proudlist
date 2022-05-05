import { TrashIcon } from '@heroicons/react/outline';
import {
  FilterIcon,
  LockClosedIcon,
  PencilAltIcon,
} from '@heroicons/react/solid';
import { HTMLAttributes } from 'react';

export interface IIconButton extends HTMLAttributes<HTMLButtonElement> {
  category: 'lock' | 'delete' | 'edit' | 'filter';
  iconSize: 'xs' | 'sm' | 'md' | 'lg';
  state: 'primary' | 'secondary' | 'default' | 'empty';
  disabled?: boolean;
  inverted?: boolean;
  className?: string;
}

const IconButton: React.FC<IIconButton> = (props: IIconButton) => {
  const { disabled, category, state, inverted, className, iconSize, ...rest } =
    props;

  function getSize(size: string) {
    switch (size) {
      case 'xs':
        return 'h-2.5 w-2.5';
      case 'sm':
        return 'h-3 w-3';
      case 'md':
        return 'h-4 w-4';
      case 'lg':
        return 'h-5 w-5';
      default:
        return 'h-5 w-5';
    }
  }

  function getState(state: string) {
    switch (state) {
      case 'primary':
        return 'text-blue-600 group-hover:text-blue-700';
      case 'secondary':
        return 'text-blue-100 group-hover:text-blue-200';
      case 'default':
        return 'text-gray-500 group-hover:text-gray-600';
      case 'empty':
        return 'text-white group-hover:text-gray-100';
    }
  }

  function getIcon(category: string, size: string, state: string) {
    switch (category) {
      case 'lock':
        return (
          <LockClosedIcon
            className={`${getSize(size)} ${getState(state)}`}
            aria-hidden='true'
          />
        );
      case 'delete':
        return (
          <TrashIcon
            className={`${getSize(size)} ${getState(state)}`}
            aria-hidden='true'
          />
        );
      case 'edit':
        return (
          <PencilAltIcon
            className={`${getSize(size)} ${getState(state)}`}
            aria-hidden='true'
          />
        );
      case 'filter':
        return (
          <FilterIcon
            className={`${getSize(size)} ${getState(state)}`}
            aria-hidden='true'
          />
        );
      default:
        break;
    }
  }

  return <>{getIcon(category, iconSize, state)}</>;
};

export default IconButton;
