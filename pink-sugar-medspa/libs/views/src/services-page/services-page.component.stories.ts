import { Meta, StoryObj } from '@storybook/angular';

import { ServicesPageComponent } from './services-page.component';

type ComponentWithCustomControls = ServicesPageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Services Page',
  component: ServicesPageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `ServicesPage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const ServicesPage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
