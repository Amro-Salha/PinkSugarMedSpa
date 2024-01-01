import { Meta, StoryObj } from '@storybook/angular';

import { LandingPageComponent } from './landing-page.component';

type ComponentWithCustomControls = LandingPageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Landing Page',
  component: LandingPageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `LandingPage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const LandingPage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
