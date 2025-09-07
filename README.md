# ALX Listing App

A modern, responsive Airbnb clone listing page built with Next.js and TypeScript. This project demonstrates advanced frontend development skills by creating a property listing interface with clean design, reusable components, and type-safe development practices.

## 🎯 Project Overview

The ALX Listing App is designed to showcase property listings in an intuitive and visually appealing manner. The application focuses on creating a seamless user experience for browsing accommodation options, featuring modern UI components, responsive design, and scalable architecture patterns.

### Key Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Type Safety**: Built with TypeScript for robust development
- **Component Architecture**: Modular and reusable React components
- **Modern Styling**: Clean, professional interface design
- **Performance Optimized**: Built with Next.js for optimal loading speeds

## 🏗️ Project Structure

```
alx-listing-app/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Header, Footer, Buttons, etc.)
│   ├── layout/          # Layout-specific components
│   └── listing/         # Listing-related components (PropertyCard, SearchBar, etc.)
├── interfaces/          # TypeScript type definitions and interfaces
│   ├── listing.ts       # Property and listing-related types
│   ├── user.ts          # User-related interfaces
│   └── common.ts        # Shared type definitions
├── constants/           # Application constants and configuration
│   ├── index.ts         # General constants (API endpoints, app config)
│   └── data.ts          # Mock data and static content
├── public/             # Static assets
│   └── assets/         # Images, icons, and other media files
│       ├── images/     # Property images, logos, illustrations
│       └── icons/      # SVG icons and graphics
├── pages/              # Next.js pages and routing
├── styles/             # CSS and styling files
└── utils/              # Utility functions and helpers
```

### Directory Purpose

- **`components/`**: Houses all reusable React components organized by functionality. This promotes code reusability and maintains a clean separation of concerns.

- **`interfaces/`**: Contains TypeScript interfaces and type definitions that ensure type safety across the application and improve developer experience.

- **`constants/`**: Stores application-wide constants, configuration values, and mock data to maintain consistency and enable easy updates.

- **`public/assets/`**: Contains static assets such as images, icons, and media files that are served directly by the web server.

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (version 7.x or higher) or **yarn**
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/alx-listing-app.git
   cd alx-listing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application in development mode.

### Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to check code quality
- `npm run type-check` - Runs TypeScript compiler to check types

## 🛠️ Technology Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: CSS Modules / Tailwind CSS
- **Package Manager**: npm
- **Code Quality**: ESLint, Prettier

## 📱 Features

- Browse property listings with detailed information
- Responsive grid layout for optimal viewing on all devices
- Interactive property cards with hover effects
- Search and filter functionality
- Clean, modern user interface
- Type-safe development with TypeScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the ALX Software Engineering Program and is intended for educational purposes.

## 📞 Support

If you encounter any issues or have questions about this project, please:

1. Check the existing issues in the repository
2. Create a new issue with a detailed description
3. Contact the development team

---

**Built with ❤️ for the ALX Software Engineering Program**  