import { useState } from 'react';
import Input from './components/Input/Input';
import Toast from './components/Toast/Toast';
import SidebarMenu, { MenuItem } from './components/SidebarMenu/SidebarMenu';

export default function App() {
  const [username, setUsername] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      onClick: () => alert('Go to Dashboard'),
    },
    {
      label: 'Settings',
      children: [
        { label: 'Profile', onClick: () => alert('Go to Profile') },
        {
          label: 'Account',
          children: [
            { label: 'Security', onClick: () => alert('Go to Security') },
            { label: 'Billing', onClick: () => alert('Go to Billing') },
          ],
        },
      ],
    },
    {
      label: 'Help',
      onClick: () => alert('Go to Help'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col gap-6 relative">
      <h1 className="text-2xl font-semibold text-gray-800">UI Components</h1>

      <button
        onClick={() => setMenuOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-max"
      >
        Open Menu
      </button>

      <main className="flex flex-col gap-6">
        <section>
          <h2 className="text-lg font-medium mb-2">Input</h2>
          <Input
            label="Username"
            clearable
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Toast</h2>
          <Toast
            message="Saved successfully!"
            type="success"
            duration={3000}
            showCloseButton={true}
          />
        </section>
      </main>

      <SidebarMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={menuItems}
      />
    </div>
  );
}
