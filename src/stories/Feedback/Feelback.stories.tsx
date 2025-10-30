import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from 'components/Toast';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastWrapper = (args: any) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="mb-4 px-4 py-2 bg-violet-500 text-white rounded"
      >
        Show Toast
      </button>
      {show && <Toast {...args} onClose={() => setShow(false)} />}
    </>
  );
};

export const Success: Story = {
  render: args => <ToastWrapper {...args} />,
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    duration: 5000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  render: args => <ToastWrapper {...args} />,
  args: {
    message: 'Something went wrong!',
    type: 'error',
    duration: 4000,
    showCloseButton: true,
  },
};

export const Info: Story = {
  render: args => <ToastWrapper {...args} />,
  args: {
    message: 'Here is some information.',
    type: 'info',
    duration: 3000,
  },
};

export const Warning: Story = {
  render: args => <ToastWrapper {...args} />,
  args: {
    message: 'Warning! Check this out.',
    type: 'warning',
    duration: 5000,
    showCloseButton: true,
  },
};
