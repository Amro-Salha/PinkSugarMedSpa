import { Meta, StoryObj } from '@storybook/angular';

import { ContactUsPageComponent } from './contact-us-page.component';

type ComponentWithCustomControls = ContactUsPageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Contact Us Page',
  component: ContactUsPageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `ContactUsPage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const ContactUsPage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
