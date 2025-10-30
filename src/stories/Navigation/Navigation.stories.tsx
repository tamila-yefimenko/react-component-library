import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SidebarMenu, { MenuItem } from 'components/SidebarMenu/SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const sampleItems1: MenuItem[] = [
  { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
  { label: 'Profile', onClick: () => alert('Profile clicked') },
  {
    label: 'Settings',
    children: [
      { label: 'General', onClick: () => alert('General clicked') },
      { label: 'Security', onClick: () => alert('Security clicked') },
    ],
  },
];

const sampleItems2: MenuItem[] = [
  { label: 'Home' },
  {
    label: 'Projects',
    children: [
      { label: 'Project A' },
      {
        label: 'Project B',
        children: [{ label: 'Task 1' }, { label: 'Task 2' }],
      },
    ],
  },
  { label: 'About' },
];

const ControlledSidebar = ({ items }: { items: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-screen bg-gray-50 p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
        onClick={() => setIsOpen(true)}
      >
        Open Sidebar
      </button>

      <SidebarMenu
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const OneLevelMenu: Story = {
  render: () => <ControlledSidebar items={sampleItems1} />,
};

export const TwoLevelMenu: Story = {
  render: () => <ControlledSidebar items={sampleItems2} />,
};
