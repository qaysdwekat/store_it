import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
// import { IconCheck, IconX, IconBell, IconStar } from '@tabler/icons-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'neutral',
        'info',
        'success',
        'warning',
        'danger',
        'rose',
        'orange',
        'cactus',
        'cyan',
        'indigo',
        'iris',
        'pink',
      ],
      description: 'Badge color variant',
      table: {
        type: { summary: 'BadgeColor' },
      },
    },
    variant: {
      control: 'select',
      options: ['highContrast', 'lowContrast', 'outline', 'plain'],
      description: 'Badge style variant',
      table: {
        type: { summary: 'BadgeVariant' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Badge size',
      table: {
        type: { summary: 'BadgeSize' },
      },
    },
    children: {
      control: 'text',
      description: 'Badge text content',
    },
    iconLeft: {
      control: false,
      description: 'Icon on the left side',
    },
    iconRight: {
      control: false,
      description: 'Icon on the right side',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default
export const Default: Story = {
  args: {
    color: 'neutral',
    variant: 'lowContrast',
    size: 'medium',
    children: 'Badge Label',
  },
};

// With Icon Left
export const WithIconLeft: Story = {
  args: {
    color: 'success',
    variant: 'outline',
    size: 'medium',
    children: 'Verified',
    // iconLeft: <IconCheck size={16} />,
  },
};

// With Icon Right
export const WithIconRight: Story = {
  args: {
    color: 'danger',
    variant: 'highContrast',
    size: 'medium',
    children: 'Error',
    // iconRight: <IconX size={16} />,
  },
};

// With Both Icons
export const WithBothIcons: Story = {
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'medium',
    children: 'Notification',
    // iconLeft: <IconBell size={16} />,
    // iconRight: <IconStar size={16} />,
  },
};

// Icon Only (no text)
export const IconOnly: Story = {
  args: {
    color: 'warning',
    variant: 'highContrast',
    size: 'medium',
    // iconLeft: <IconStar size={16} />,
  },
};

// All Sizes
export const Small: Story = {
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'small',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'medium',
    children: 'Medium',
  },
};

export const Large: Story = {
  args: {
    color: 'info',
    variant: 'highContrast',
    size: 'large',
    children: 'Large',
  },
};

// All HighContrast Colors
export const AllHighContrastColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="highContrast" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="highContrast" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="highContrast" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="highContrast" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="highContrast" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="highContrast" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="highContrast" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="highContrast" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="highContrast" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="highContrast" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="highContrast" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="highContrast" size="medium" color="pink">
        Pink
      </Badge>
    </div>
  ),
};

// All LowContrast Colors
export const AllLowContrastColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="lowContrast" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="lowContrast" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="lowContrast" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="lowContrast" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="lowContrast" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="lowContrast" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="lowContrast" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="lowContrast" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="lowContrast" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="lowContrast" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="lowContrast" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="lowContrast" size="medium" color="pink">
        Pink
      </Badge>
    </div>
  ),
};

// All Outline Colors
export const AllOutlineColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="outline" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="outline" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="outline" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="outline" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="outline" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="outline" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="outline" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="outline" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="outline" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="outline" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="outline" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="outline" size="medium" color="pink">
        Pink
      </Badge>
    </div>
  ),
};

// All Plain Colors
export const AllPlainColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="plain" size="medium" color="neutral">
        Neutral
      </Badge>
      <Badge variant="plain" size="medium" color="info">
        Info
      </Badge>
      <Badge variant="plain" size="medium" color="success">
        Success
      </Badge>
      <Badge variant="plain" size="medium" color="warning">
        Warning
      </Badge>
      <Badge variant="plain" size="medium" color="danger">
        Danger
      </Badge>
      <Badge variant="plain" size="medium" color="rose">
        Rose
      </Badge>
      <Badge variant="plain" size="medium" color="orange">
        Orange
      </Badge>
      <Badge variant="plain" size="medium" color="cactus">
        Cactus
      </Badge>
      <Badge variant="plain" size="medium" color="cyan">
        Cyan
      </Badge>
      <Badge variant="plain" size="medium" color="indigo">
        Indigo
      </Badge>
      <Badge variant="plain" size="medium" color="iris">
        Iris
      </Badge>
      <Badge variant="plain" size="medium" color="pink">
        Pink
      </Badge>
    </div>
  ),
};
