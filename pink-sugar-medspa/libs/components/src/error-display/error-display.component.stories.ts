import { Meta, StoryObj } from '@storybook/angular';

import { ErrorDisplayComponent } from './error-display.component';

type ComponentWithCustomControls = ErrorDisplayComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Error Display',
  component: ErrorDisplayComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `ErrorDisplay` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const ErrorDisplay: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
