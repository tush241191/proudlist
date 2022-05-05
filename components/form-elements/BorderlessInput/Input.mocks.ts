import { IInput } from './Input';

const base: IInput = {
  id: '1',
  name: 'form-input-name',
  placeholder: 'Enter text',
  state: 'primary',
  loading: false,
  inverted: false,
};

export const mockInputProps = {
  base,
};
