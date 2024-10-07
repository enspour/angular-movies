import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

type StoryType = ButtonComponent & { label: string };

const meta: Meta<StoryType> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['filled', 'outlined'] },
  },
  render: (args) => {
    const { label, ...props } = args;

    return {
      props,
      template: `
        <button app-button [type]="type">${label}</button>
      `,
    };
  },
};

export default meta;

type Story = StoryObj<StoryType>;

export const FilledButton: Story = {
  args: {
    label: 'Filled Button',
    type: 'filled',
  },
};

export const OutlinedButton: Story = {
  args: {
    label: 'Outlined Button',
    type: 'outlined',
  },
};
