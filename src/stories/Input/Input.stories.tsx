import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from 'components/Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const ControlledInput = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
  );
};

export const Text: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <ControlledInput
        {...args}
        label="Text input"
        type="text"
        clearable={false}
        placeholder="Type something..."
      />
      <ControlledInput
        {...args}
        label="Clearable text input"
        type="text"
        clearable
        placeholder="Type something..."
      />
    </div>
  ),
};

export const Password: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <ControlledInput
        {...args}
        label="Password input"
        type="password"
        clearable={false}
        placeholder="Enter password"
      />
      <ControlledInput
        {...args}
        label="Clearable password input"
        type="password"
        clearable
        placeholder="Enter password"
      />
    </div>
  ),
};

export const Number: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <ControlledInput
        {...args}
        label="Number input"
        type="number"
        clearable={false}
        placeholder="Enter number"
      />
      <ControlledInput
        {...args}
        label="Clearable number input"
        type="number"
        clearable
        placeholder="Enter number"
      />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Input>;
