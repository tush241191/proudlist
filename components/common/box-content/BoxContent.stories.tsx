import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoxContent, { IBoxContent } from './BoxContent';
import { mockBoxContentProps } from './BoxContent.mocks';

export default {
  title: 'common/BoxContent',
  component: BoxContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BoxContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BoxContent> = (args) => (
  <BoxContent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBoxContentProps.base,
} as IBoxContent;
