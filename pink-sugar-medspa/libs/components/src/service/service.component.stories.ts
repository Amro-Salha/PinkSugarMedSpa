import { Meta, StoryObj } from '@storybook/angular';

import { ServiceComponent } from './service.component';

type ComponentWithCustomControls = ServiceComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Service',
  component: ServiceComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Service` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Service: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
