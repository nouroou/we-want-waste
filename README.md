# Skip Hire Page - A Modern React Refactor

This project completely reimagines a skip hire selection page, focusing on a clean user experience and modern development practices.

## The Approach

I wanted to move away from the original dark, cluttered interface and create something that felt more intuitive and professional. The inspiration for this redesign came from a clean, spacious Framer site I saw a while back. The goal was to build an interface that feels open, guides the user naturally, and is built on a rock-solid, maintainable codebase.

The whole application was refactored from a single component into a structured React and TypeScript project, making it scalable and much easier to work with.

### Color Palette

The color scheme is central to the new design. It uses a professional indigo as the primary accent, with clean grays for text and backgrounds.

| Role              | CSS Variable              | Hex       | Tailwind Equivalent |
| ----------------- | ------------------------- | --------- | ------------------- |
| **Primary** | `--color-primary`         | `#4f46e5` | `indigo-600`        |
| **Primary (Hover)**| `--color-primary-hover`   | `#4338ca` | `indigo-700`        |
| **Background** | `--color-bg-base`         | `#f9fafb` | `gray-50`           |
| **Card Background**| `--color-bg-card`         | `#ffffff` | `white`             |
| **Heading Text** | `--color-text-heading`    | `#111827` | `gray-900`          |
| **Body Text** | `--color-text-base`       | `#1f2937` | `gray-800`          |
| **Muted Text** | `--color-text-muted`      | `#4b5563` | `gray-600`          |
| **Border** | `--border-color`          | `#e5e7eb` | `gray-200`          |

## Key Features

* **Modern UI/UX:** A light, spacious design that's easy on the eyes.
* **Component-Based:** The app is split into logical, reusable components.
* **Centralized Theming:** All colors and styles are managed with CSS variables in `index.css` for easy updates.
* **Type-Safe:** Built with TypeScript to catch errors early and improve code quality.

## Tech Stack

* **Vite & React**
* **TypeScript**
* **Tailwind CSS (v4)**

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
