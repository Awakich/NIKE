import type { Meta, StoryObj } from '@storybook/react';
import { ButtonUI } from '../ui/Button/ButtonUI';

const meta = {
  title: 'UI/Button',
  component: ButtonUI,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};