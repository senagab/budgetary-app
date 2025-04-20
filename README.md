# React Router Budgetary App

<p align="left">
 <img src="https://img.shields.io/badge/heroicons-v2.2.0-e44849?labelColor=black&logo=heroicons">
 <img src="https://img.shields.io/badge/toastify-v11.0.5-blue?labelColor=black&logo=toastify">
 <img src="https://img.shields.io/badge/reactrouterdom-v6.8.0-blue?labelColor=green&logo=reactrouterdom">
</p>

## Overview

The **Budgetary App** is a React-based web application designed to help users manage their finances effectively. With features like budget tracking, expense categorization, and real-time updates, this app provides a seamless experience for users to stay on top of their financial goals.

## Features

- **User Management**: Add, edit, and delete user data.
- **Budget Tracking**: Monitor income and expenses in real-time.
- **Categorization**: Organize transactions into categories for better insights.
- **React Router Integration**: Smooth navigation between pages using `react-router-dom`.
- **Persistent Data**: Save user data in local storage.
- **Responsive Design**: Optimized for all screen sizes.

## Tech Stack

- **Frontend**: React (JSX, Hooks)
- **Routing**: React Router DOM
- **Styling**: CSS
- **Icons**: Heroicons
- **Notifications**: React Toastify
- **Storage**: LocalStorage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/budgetary-app.git
   cd budgetary-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`.

## Folder Structure

```
📂 budgetary-app
├── 📂 public
│   ├── favicon.svg       # App favicon
├── 📂 src
│   ├── 📂 actions        # App actions (e.g., logout)
│   ├── 📂 assets         # Static assets (images, icons)
│   ├── 📂 components     # Reusable UI components
│   ├── 📂 layouts        # Layout components
│   ├── 📂 pages          # Route pages
│   ├── 📜 App.jsx        # Main app component
│   ├── 📜 helpers.js     # Utility functions
│   ├── 📜 index.css      # Global styles
│   ├── 📜 main.jsx       # App entry point
├── 📜 index.html         # HTML template
├── 📜 package.json       # Project configuration
├── 📜 README.md          # Project documentation
├── 📜 vite.config.js     # Vite configuration
```

## Usage

- **Home Page**: Displays the user's dashboard with financial data.
- **Logout**: Allows users to delete their data and reset the app.

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `@heroicons/react`
- `react-toastify`

## Future Enhancements

- **Authentication**: Add user authentication with Firebase/Auth0.
- **Cloud Storage**: Integrate with a backend database like MongoDB or Firebase.
- **Analytics**: Add charts and graphs for better financial insights.