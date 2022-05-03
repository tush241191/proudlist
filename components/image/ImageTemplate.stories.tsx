import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageTemplate, { IImageTemplate } from './ImageTemplate';
import { mockImageTemplateProps } from './ImageTemplate.mocks';

export default {
  title: 'image/ImageTemplate',
  component: ImageTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ImageTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageTemplate> = (args) => (
  <ImageTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockImageTemplateProps.base,
} as IImageTemplate;
