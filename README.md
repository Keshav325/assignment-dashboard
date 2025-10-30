# Student Dashboard Website

This project is a Next.js application for a student and admin dashboard. It provides a simple interface for students to view and submit assignments, and for administrators to create and manage assignments.

## Project Setup Instructions

To get started with the project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd student-dashboard-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Overview

This project is built using Next.js, a React framework that enables server-side rendering and static site generation. It leverages route groups for organizing dashboard-related pages and uses React's `useState` and `useEffect` hooks for client-side interactivity. Data for assignments is currently mocked and stored in `localStorage` for demonstration purposes.

## Folder Structure Overview

```
.
├── public/                     # Static assets like images
├── src/
│   ├── app/
│   │   ├── (dashboard)/        # Route group for dashboard pages
│   │   │   ├── admin/          # Admin dashboard page
│   │   │   │   └── page.tsx
│   │   │   ├── student/        # Student dashboard page
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx      # Dashboard layout with sidebar and navbar
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout of the application
│   │   └── page.tsx            # Homepage with links to student and admin dashboards
│   ├── components/             # Reusable UI components
│   │   ├── Announcement.tsx
│   │   ├── AttendanceChart.tsx
│   │   ├── CountChart.tsx
│   │   ├── EventCalender.tsx
│   │   ├── FinanceChart.tsx
│   │   ├── Menu.tsx
│   │   ├── Navbar.tsx
│   │   └── UserCard.tsx
│   └── utils/
│       └── assignments.ts      # Utility functions for managing assignment data
├── package.json                # Project dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Component Structure and Design Decisions

*   **Client Components**: Pages and components that require interactivity (e.g., using `useState`, `useEffect`) are marked with `'use client';` to ensure they are rendered on the client side.
*   **Layouts**: Next.js layouts (`src/app/layout.tsx` and `src/app/(dashboard)/layout.tsx`) are used to define shared UI that applies to groups of pages, promoting consistency and reusability.
*   **Modular Components**: UI elements are broken down into smaller, reusable components (e.g., `UserCard`, `EventCalender`, `Announcements`) located in the `src/components` directory.
*   **Assignment Management**: A dedicated utility file (`src/utils/assignments.ts`) handles the logic for storing and retrieving assignment data, encapsulating this functionality and keeping components clean. This uses `localStorage` for mock data persistence.
*   **Styling**: Tailwind CSS is used for utility-first styling, enabling rapid UI development and maintainable styles.