import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Layout/UI/Input/Input';

const meta = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
    args: {
        label: 'Input',
    },
};