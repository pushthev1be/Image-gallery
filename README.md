# 🖼️ Image Gallery

A modern React-based image gallery application with upload functionality and responsive design. Built with Create React App and integrated with a Node.js backend for image management.

## 🚀 Features

- **Image Upload**: Upload and manage images with drag-and-drop support
- **Responsive Gallery**: Grid-based layout that adapts to different screen sizes
- **Image Preview**: Full-size image viewing with navigation
- **Search & Filter**: Find images by title or description
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, CSS3
- **Styling**: CSS Modules / Styled Components
- **Build Tool**: Create React App
- **Backend Integration**: REST API calls to image-backend service

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Running instance of the image-backend API

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/pushthev1be/Image-gallery.git
   cd Image-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   - Update the API base URL in your configuration to point to your backend service
   - Default: `http://localhost:5000/api`

4. **Start the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main application pages
├── services/           # API service functions
├── styles/             # CSS and styling files
├── utils/              # Utility functions
└── App.js              # Main application component
```

## 🔧 Configuration

The app expects the backend API to be running and accessible. Update the API configuration in:
- `src/services/api.js` - API base URL and endpoints

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the build folder**
   - The `build` folder contains the production-ready files
   - Can be deployed to Vercel, Netlify, or any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

MIT License - see LICENSE file for details

## 🔗 Related Projects

- [Image Backend API](https://github.com/pushthev1be/image-backend) - Backend service for this gallery
