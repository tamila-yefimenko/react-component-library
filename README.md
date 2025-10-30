# 🧩 UI Components Library

A small reusable **React + TypeScript + TailwindCSS** component library built
with **Vite** and **Storybook**.

Includes three customizable components:

- 📝 **Input**
- 🔔 **Toast**
- 📂 **SidebarMenu**

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone hhttps://github.com/tamila-yefimenko/react-component-library
cd ui-components
2️⃣ Install dependencies
bash
npm install
3️⃣ Run Storybook
To preview all components in isolation:

bash
npm run storybook
Storybook will start at
👉 http://localhost:6006

4️⃣ Run the demo app
To see the components in the sample app:

bash
npm run dev
Vite dev server will start at
👉 http://localhost:5173

🧱 Component Overview
📝 Input Component
A flexible input field supporting:

Labels

Clearable state (with ✕ icon)

Password visibility toggle (👁️)

Works with all input types (text, password, number, etc.)

Props:

Prop	Type	Default	Description
label	string	—	Optional input label
clearable	boolean	false	Shows ✕ button to clear input
type	string	'text'	Input type
value	string	—	Controlled input value
onChange	(e) => void	—	Change handler

Preview:



🔔 Toast Component
A dismissible notification component.

Behavior:

Appears in the bottom-right corner

Auto-dismisses after a given duration

Smooth fade/slide transitions

Optional manual close button

Props:

Prop	Type	Default	Description
message	string	—	Toast message text
type	'success' | 'error' | 'info' | 'warning'	'info'	Visual style variant
duration	number	3000	Auto-dismiss duration (ms)

Preview:


📂 SidebarMenu Component
A sliding sidebar navigation with nested submenus.

Behavior:

Slides in from the right

Supports multi-level expandable submenus

Closes when clicking the background or the close button

Built with Framer Motion

Props:

Prop	Type	Description
isOpen	boolean	Whether the sidebar is visible
onClose	() => void	Called when the sidebar closes
items	MenuItem[]	Menu structure

MenuItem type:

ts
Копіювати код
{
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}
Preview:



🧪 Storybook Documentation
Each component is fully documented with interactive stories in Storybook:

Variants for each type (where applicable)

Different states and durations

With/without optional props

Controls for live prop editing

To view stories:

bash
npm run storybook
🛠️ Tech Stack
⚛️ React 18

🧩 TypeScript

🎨 Tailwind CSS

🧱 Storybook

✨ Framer Motion (for Sidebar animation)

📦 Vite

📸 Screenshots

Storybook UI displaying Input
<img src="/screenshots/storybook-input.png" alt="Storybook Input Screenshot" style="width:30%;"/>

Storybook UI displaying Toast
<img src="/screenshots/storybook-toast.png" alt="Storybook Toast Screenshot" style="width:30%;"/>

Storybook UI displaying SidebarMenu
<img src="/screenshots/storybook-sidebar-menu.png" alt="Storybook SidebarMenu Screenshot" style="width:30%;"/>

Input type="text"
<img src="/screenshots/text-input.png" alt="Text Input Screenshot" style="width:30%;"/>

Input type="text" clearable
<img src="/screenshots/text-input-clearable.png" alt="Text Input clearable Screenshot" style="width:30%;"/>

Input type="password" with eye icon
<img src="/screenshots/password-input-visible.png" alt="Password Input with eye icon Screenshot" style="width:30%;"/>

Input type="password" with eye icon clearable
<img src="/screenshots/password-input-clearable.png" alt="Password Input clearable Screenshot" style="width:30%;"/>

Input type="number"
<img src="/screenshots/number-input.png" alt="Number Input Screenshot" style="width:30%;"/>

Input type="number" clearable
<img src="/screenshots/number-input-clearable.png" alt="Number Input clearable Screenshot" style="width:30%;"/>

Success Toast with close button
<img src="/screenshots/success-toast-close.png" alt="Success Toast Screenshot" style="width:30%;"/>

Error Toast with close button
<img src="/screenshots/error-toast-close.png" alt="Error Toast Screenshot" style="width:30%;"/>

Info Toast without close button
<img src="/screenshots/info-toast.png" alt="Info Toast Screenshot" style="width:30%;"/>

Warning Toast with close button
<img src="/screenshots/warning-toast-close.png" alt="Warning Toast Screenshot" style="width:30%;"/>

Sidebar Menu with 1-level nested items
<img src="/screenshots/one-level-menu.png" alt="Sidebar Menu 1-level Screenshot" style="width:30%;"/>

Sidebar Menu with 2-level nested items
<img src="/screenshots/two-level-menu.png" alt="Sidebar Menu 2-level Screenshot" style="width:30%;"/>

📄 License
MIT © 2025 Tamila Yefimenko
```
