import { ComponentMeta, ComponentStory } from '@storybook/react';
import Features, { IFeatures } from './Features';
import { mockFeaturesProps } from './Features.mocks';

export default {
  title: 'utility/Features',
  component: Features,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Features>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Features> = (args) => (
  <div className='max-w-screen-2xl mx-auto relative grid overflow-hidden'>
    <Features {...args} />
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeaturesProps.base,
} as IFeatures;
