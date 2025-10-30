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
git clone https://github.com/tamila-yefimenko/react-component-library
cd ui-components
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run Storybook

To preview all components in isolation:

```bash
npm run storybook
```

Storybook will start at 👉 http://localhost:6006

### 4️⃣ Run the demo app

To see the components in the sample app:

```bash
npm run dev
```

Vite dev server will start at 👉 http://localhost:5173

## 🧱 Component Overview

### 📝 Input Component

A flexible input field supporting:

- Labels

- Clearable state (with ✕ icon)

- Password visibility toggle (👁️)

- Works with all input types (text, password, number, etc.)

**_Props:_**

| Prop        | Type          | Default  | Description                   |
| ----------- | ------------- | -------- | ----------------------------- |
| `label`     | `string`      | —        | Optional input label          |
| `clearable` | `boolean`     | `false`  | Shows ✕ button to clear input |
| `type`      | `string`      | `'text'` | Input type                    |
| `value`     | `string`      | —        | Controlled input value        |
| `onChange`  | `(e) => void` | —        | Change handler                |

### 🔔 Toast Component

A dismissible notification component.

**_Behavior:_**

- Appears in the bottom-right corner

- Auto-dismisses after a given duration

- Smooth fade/slide transitions

- Optional manual close button

**_Props:_**

| Prop        | Type          | Default  | Description                   |
| ----------- | ------------- | -------- | ----------------------------- |
| `label`     | `string`      | —        | Optional input label          |
| `clearable` | `boolean`     | `false`  | Shows ✕ button to clear input |
| `type`      | `string`      | `'text'` | Input type                    |
| `value`     | `string`      | —        | Controlled input value        |
| `onChange`  | `(e) => void` | —        | Change handler                |

### 📂 SidebarMenu Component

A sliding sidebar navigation with nested submenus.

**_Behavior:_**

- Slides in from the right

- Supports multi-level expandable submenus

- Closes when clicking the background or the close button

- Built with Framer Motion

**_Props:_**

| Prop      | Type         | Description                    |
| --------- | ------------ | ------------------------------ |
| `isOpen`  | `boolean`    | Whether the sidebar is visible |
| `onClose` | `() => void` | Called when the sidebar closes |
| `items`   | `MenuItem[]` | Menu structure                 |

**MenuItem type:**

```ts
{
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}
```

## 🧪 Storybook Documentation

Each component is fully documented with interactive stories in Storybook:

- Variants for each type (where applicable)

- Different states and durations

- With/without optional props

- Controls for live prop editing

To view stories:

```bash
npm run storybook
```

## 🛠️ Tech Stack

- ⚛️ React 18

- 🧩 TypeScript

- 🎨 Tailwind CSS

- 🧱 Storybook

- ✨ Framer Motion (for Sidebar animation)

- 📦 Vite

## 📸 Screenshots

### Storybook UI

**_Input_**

<img src="/public/screenshots/storybook-input.png" alt="Storybook Input Screenshot" width="30%"/>

**_Toast_**

<img src="/public/screenshots/storybook-toast.png" alt="Storybook Toast Screenshot" width="30%"/>

**_Sidebar Menu_**

<img src="/public/screenshots/storybook-sidebar-menu.png" alt="Storybook SidebarMenu Screenshot" width="30%"/>

### Component States

**_Text Input_**

<img src="/public/screenshots/text-input.png" alt="Text Input Screenshot" width="30%"/>
<img src="/public/screenshots/text-input-clearable.png" alt="Text Input Screenshot" width="30%"/>

**_Password Input (visible)_**

<img src="/public/screenshots/password-input-visible.png" alt="Password Input with eye icon Screenshot" width="30%"/>
<img src="/public/screenshots/password-input-clearable.png" alt="Password Input clearable Screenshot" width="30%"/>

**_Number Input_**

<img src="/public/screenshots/number-input.png" alt="Number Input Screenshot" width="30%"/>
<img src="/public/screenshots/number-input-clearable.png" alt="Number Input clearable Screenshot" width="30%"/>

**_Success Toast_**

<img src="/public/screenshots/success-toast-close-btn.png" alt="Success Toast Screenshot" width="30%"/>

**_Error Toast_**

<img src="/public/screenshots/error-toast-close-btn.png" alt="Error Toast Screenshot" width="30%"/>

**_Info Toast_**

<img src="/public/screenshots/info-toast.png" alt="Info Toast Screenshot" width="30%"/>

**_Warning Toast_**

<img src="/public/screenshots/warning-toast-close-btn.png" alt="Warning Toast Screenshot" width="30%"/>

**_Sidebar (1 level)_**

<img src="/public/screenshots/one-level-menu.png" alt="Sidebar 1-level Screenshot" width="30%"/>

**_Sidebar (2 levels)_**

<img src="/public/screenshots/two-level-menu.png" alt="Sidebar 2-level Screenshot" width="30%"/>

## 📄 License

MIT © 2025 **Tamila Yefimenko**
