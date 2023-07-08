import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../ui/Typography/Typography';

const meta = {
    title: 'UI/Typography',
    component: Typography,
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        size: 'small',
        text: 'Text',
        weight: 'normal'
    },
};

export const Medium: Story = {
    args: {
        text: 'Text',
        size: 'medium'
    },
};

export const H2: Story = {
    args: {
        size: 'h2',
        text: 'Text',
        weight: 'bold'
    },
};

export const H1: Story = {
    args: {
        size: 'h1',
        text: 'Text',
        weight: 'bold'
    },
};