import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton, { IIconButton } from './IconButton';
import { mockIconButtonProps } from './IconButton.mocks';

export default {
  title: 'buttons/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockIconButtonProps.base,
} as IIconButton;
