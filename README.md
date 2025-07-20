# React Landing Page

A modern, responsive landing page built with React.js featuring a clean design and smooth user experience.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Working contact form with state management
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Fast Performance**: Optimized for speed and SEO

## Sections

1. **Header**: Fixed navigation with logo and menu items
2. **Hero**: Eye-catching banner with call-to-action buttons
3. **Features**: Showcase of key product/service features
4. **About**: Information about your company or service
5. **Contact**: Contact form for user inquiries
6. **Footer**: Links and company information

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer:
- [Download Node.js](https://nodejs.org/)

### Installation

1. Open your terminal/command prompt
2. Navigate to the project directory:
   ```bash
   cd react-landing-page
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Customization

### Changing Colors
Edit the CSS variables in `src/App.css` to change the color scheme:
- Primary color: `#2563eb`
- Secondary color: `#1d4ed8`
- Background colors: Various shades of gray and white

### Updating Content
- **Logo/Brand Name**: Edit `src/components/Header.js`
- **Hero Section**: Edit `src/components/Hero.js`
- **Features**: Edit `src/components/Features.js`
- **About Section**: Edit `src/components/About.js`
- **Contact Form**: Edit `src/components/Contact.js`
- **Footer**: Edit `src/components/Footer.js`

### Adding Images
Replace the placeholder image section in the About component with your actual images.

## Build for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized files ready for deployment.

## Deployment

You can deploy this landing page to various platforms:
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use the build folder
- **Any web hosting service**: Upload the build folder contents

## Docker Deployment

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running

### Quick Start with Docker

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

2. **Or use the deployment script:**
   ```bash
   .\deploy.ps1
   ```

3. **Or manually build and run:**
   ```bash
   # Build the image
   docker build -t react-landing-page .
   
   # Run the container
   docker run -d -p 3000:80 --name react-landing-page react-landing-page
   ```

4. **Access your app:** http://localhost:3000

### Docker Commands

- **View logs:** `docker logs react-landing-page`
- **Stop container:** `docker stop react-landing-page`
- **Remove container:** `docker rm react-landing-page`
- **Remove image:** `docker rmi react-landing-page`

### Docker Features

- **Multi-stage build:** Optimized for production
- **Nginx server:** Fast, lightweight web server
- **Gzip compression:** Reduced file sizes
- **Security headers:** Enhanced security
- **Static file caching:** Improved performance
- **SPA routing support:** Handles React Router

## Technologies Used

- React.js
- CSS3 (Grid, Flexbox, Animations)
- Modern JavaScript (ES6+)
- Responsive Design
- Google Fonts (Inter)
- Docker & Docker Compose
- Nginx (for production)

## License

This project is open source and available under the [MIT License](LICENSE).
