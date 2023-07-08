import type { Meta, StoryObj } from '@storybook/react';
import Date from '../ui/Date/Date';

const meta = {
    title: 'UI/Date',
    component: Date,
    tags: ['autodocs'],
} satisfies Meta<typeof Date>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        day: '02',
        month: "Mar"
    },
};