# Notifications App

A modern React application for managing and searching notifications with a clean, user-friendly interface.

## Overview

The Notifications App provides an intuitive way to view, filter, and search through notifications. It includes features like real-time search, notification categorization, and importance indicators.

## Features

- 📢 **Notification Management**: Display and organize notifications by type and importance
- 🔍 **Smart Search**: Search notifications by message, user, or type with real-time filtering
- ⚡ **Debounced Search**: Optimized search performance with 500ms debounce
- 🎨 **Responsive UI**: Reusable component system with custom styling
- ♿ **Accessibility**: ARIA labels and semantic HTML for better accessibility

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Alert.jsx
│   ├── Avatar.jsx
│   ├── Badge.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── NotificationCard.jsx
│   └── SearchBar.jsx
├── data/               # Static data
│   └── notifications.js
├── hooks/              # Custom React hooks
│   ├── useDebounce.js  # Debounce hook for search optimization
│   └── useFetch.js     # Fetch and filter data hook
├── styles/             # CSS stylesheets
│   └── SearchBar.css
├── App.js              # Main app component
└── index.js            # React DOM entry point
```

## Components

- **SearchBar**: Main search interface with debounced input and real-time result display
- **NotificationCard**: Individual notification display with type, message, user, and importance
- **Alert**: Alert notification component
- **Avatar**: User avatar display
- **Badge**: Status/type badge component
- **Button**: Reusable button component
- **Card**: Generic card container

## Custom Hooks

- **useDebounce**: Delays search input by 500ms to reduce unnecessary queries
- **useFetch**: Filters notifications based on search query

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when you make changes.

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is minized and optimized for the best performance.

### Testing

```bash
npm test
```

Launches the test runner in interactive watch mode.

## Usage

1. Start the application with `npm start`
2. The app loads with a list of notifications
3. Use the search bar to filter notifications by:
   - Message content
   - User name
   - Notification type
4. Click the ✕ button to clear the search input
5. Results update in real-time as you type

## Technologies Used

- **React 19.2**: UI framework
- **React DOM 19.2**: React rendering library
- **React Scripts 5.0**: Build tooling (Create React App)
- **Testing Library**: Testing utilities

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and for internal use.
