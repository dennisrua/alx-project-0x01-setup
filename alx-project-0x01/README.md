This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

# My ProDev Frontend Journey – React Architect

This is my second milestone project in **ProDev Frontend**, called **React Architect**.  
In this phase, I’m moving beyond the basics and learning **advanced project structuring in Next.js**.

The project is a **comprehensive Next.js application** with multiple pages for posts and users. It integrates APIs, uses TypeScript for safety, and Tailwind CSS for styling. I’m also practicing **state management, reusable components, and modals** to create a more interactive experience.

---

## What I’m Learning

By working on this project, I’m learning how to:

- Set up a **Next.js application with TypeScript + Tailwind CSS**
- Implement **dynamic routing and navigation**
- Create **reusable components** (Buttons, Cards, Modals)
- Work with **JSONPlaceholder API** to fetch posts and users
- Build interactive **PostModal** and **UserModal** forms
- Apply **static site generation (getStaticProps)**
- Manage component state with **React hooks**
- Follow **atomic design principles** and clean folder structure
- Maintain **type safety** with TypeScript interfaces
- Build responsive UIs with **Tailwind CSS**

---

## My Setup

- **Node.js** v16+
- **Next.js (latest)**
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

---

## Project Structure

Here’s how I organized the project:

```
alx-project-0x01/
├── components/
│   ├── common/       # Shared UI components (Button, PostCard, UserCard, Modals)
│   └── layout/       # Layout components (Header, Footer)
├── interfaces/       # TypeScript interfaces
├── pages/
│   ├── posts/        # Posts pages
│   ├── users/        # Users pages
│   └── index.tsx     # Home page
├── public/           # Static assets
├── styles/           # Global styles
└── ...
```

---

## My Progress (Tasks)

### 0. Setting Up the Project

I created the base app with:

```bash
npx create-next-app@latest alx-project-0x01 --typescript
```

I selected **Yes** for ESLint, Tailwind, and import alias.  
Then I set up `global.css` with Tailwind directives and added a minimal **Welcome Page**.

---

### 1. Navigation System

I built a **Header component** with links to `Home`, `Posts`, and `Users`.

- Navigation works seamlessly without reloading pages.
- I added the `Header` to `index.tsx`, `posts/index.tsx`, and `users/index.tsx`.

---

### 2. Posts Functionality

- Defined a `PostProps` interface.
- Built a **PostCard** component that displays post data.
- On the `/posts` page, I fetched data from **JSONPlaceholder** using `getStaticProps` and mapped it into multiple **PostCards**.
- Added an **Add Post button** for interactivity.

---

### 3. Users Functionality

- Created a `UserProps` interface based on nested user data.
- Built a **UserCard** component for displaying user info.
- Fetched user data from **JSONPlaceholder** and displayed them on `/users`.

---

### 4. Post Modal (Interactive Component)

I implemented a **PostModal** with a form to add new posts.

- Used `useState` to manage form data.
- The modal pops up when the **Add Post button** is clicked.
- On form submission, the new post gets added with an auto-generated ID.

---

### 5. User Modal

I extended the same modal concept to **Users**.

- Built a **UserModal** with form inputs for user details.
- Clicking **Add User** opens the modal and allows adding a new user dynamically.

---

## Repo Info

- **Repo:** `alx-project-0x01-setup`
- **Main folder:** `alx-project-0x01`
- **Key files so far:**
  - `components/common/Button.tsx`
  - `components/common/PostCard.tsx`
  - `components/common/PostModal.tsx`
  - `components/common/UserCard.tsx`
  - `components/common/UserModal.tsx`
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `interfaces/index.ts`
  - `pages/posts/index.tsx`
  - `pages/users/index.tsx`
  - `pages/index.tsx`

---

## Final Note

This project has been about **thinking like an architect** — not just building components, but structuring them properly, ensuring **type safety**, and making the app **scalable and maintainable**.

I’m learning how to go beyond “just making it work” into **building clean, professional-level React apps with Next.js**.
