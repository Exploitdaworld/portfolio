# 🚀 React Landing Page - Portfolio

A stunning, modern portfolio landing page built with React.js featuring a cyberpunk-inspired design, smooth animations, and professional presentation. This project showcases DevOps engineering expertise and AI/MLOps capabilities through an interactive, responsive web experience.

![Portfolio Preview](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

## ✨ Features

### 🎨 **Modern Design**
- **Cyberpunk Aesthetic**: Neon colors, glitch effects, and futuristic design elements
- **Gradient Backgrounds**: Beautiful animated gradient overlays with particle effects
- **Glass Morphism**: Backdrop blur effects with translucent elements
- **Responsive Layout**: Perfectly optimized for desktop, tablet, and mobile devices

### 🚀 **Interactive Elements**
- **Typewriter Effect**: Dynamic role switching animation in hero section
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Animations**: Engaging micro-interactions throughout the site
- **Contact Form**: Functional contact form with EmailJS integration
- **Loading States**: Professional form submission feedback

### ⚡ **Performance & SEO**
- **Fast Loading**: Optimized bundle size and efficient rendering
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Production Ready**: Minified and optimized for deployment
- **Docker Support**: Containerized deployment with Nginx

## 🏗️ **Project Structure**

```
react-landing-page/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js           # Navigation component
│   │   ├── Hero.js             # Hero section with animations
│   │   ├── About.js            # About section
│   │   ├── Skills.js           # Skills showcase
│   │   ├── Contact.js          # Contact form with EmailJS
│   │   └── Footer.js           # Footer component
│   ├── App.js                  # Main app component
│   ├── App.css                 # Custom styles
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables
├── Dockerfile                  # Docker configuration
├── docker-compose.yml          # Docker Compose setup
├── nginx.conf                  # Nginx configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── deploy.ps1                  # PowerShell deployment script
├── EMAILJS_SETUP.md           # EmailJS setup guide
└── package.json               # Dependencies and scripts
```

## 📦 **Technologies Used**

### **Frontend**
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) **React 18.2.0** - Modern UI library
- ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) **Tailwind CSS 3.4.17** - Utility-first CSS framework
- ![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?logo=postcss&logoColor=white) **PostCSS** - CSS processing tool
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) **ES6+** - Modern JavaScript features

### **Backend Services**
- ![EmailJS](https://img.shields.io/badge/-EmailJS-FF6B6B) **EmailJS** - Client-side email service
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) **Node.js** - Development environment

### **DevOps & Deployment**
- ![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white) **Docker** - Containerization
- ![Nginx](https://img.shields.io/badge/-Nginx-009639?logo=nginx&logoColor=white) **Nginx** - Web server
- ![PowerShell](https://img.shields.io/badge/-PowerShell-5391FE?logo=powershell&logoColor=white) **PowerShell** - Deployment automation

## 🚀 **Quick Start**

### **Prerequisites**

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-landing-page.git
   cd react-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your EmailJS credentials
   ```

4. **Start development server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📧 **EmailJS Configuration**

The contact form uses EmailJS for sending emails directly from the client-side. Follow the detailed setup guide in [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

### **Quick Setup:**

1. Create an [EmailJS account](https://www.emailjs.com/)
2. Set up Gmail service
3. Create email template
4. Update `.env` file:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

## 🐳 **Docker Deployment**

### **Using Docker Compose (Recommended)**

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### **Using PowerShell Script**

```powershell
# Run the automated deployment script
.\deploy.ps1
```

### **Manual Docker Commands**

```bash
# Build the Docker image
docker build -t react-landing-page .

# Run the container
docker run -d -p 3000:80 --name react-landing-page react-landing-page

# View logs
docker logs react-landing-page

# Stop and remove container
docker stop react-landing-page
docker rm react-landing-page
```

## 🎨 **Customization**

### **Colors & Theme**

The project uses a custom cyberpunk color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  cyber: {
    blue: '#00d4ff',
    green: '#00ff88',
    pink: '#ff006e',
    purple: '#7c3aed',
    dark: '#0f0f23',
  }
}
```

### **Content Updates**

- **Personal Info**: Update contact details in `src/components/Contact.js`
- **Skills**: Modify skills list in `src/components/Skills.js`
- **Hero Section**: Edit roles and description in `src/components/Hero.js`
- **About Section**: Update bio and experience in `src/components/About.js`

### **Animations**

Custom animations are defined in `tailwind.config.js` including:
- `glow` - Text glow effect
- `float` - Floating elements animation
- `glitch` - Cyberpunk glitch effect
- `blob` - Morphing background shapes
- `fadeInUp` - Entrance animations

## 🛠️ **Available Scripts**

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run test suite
npm run eject      # Eject from Create React App (irreversible)
```

## 🚀 **Deployment Options**

### **Static Hosting**
- **Netlify**: Drag and drop `build/` folder or connect Git repo
- **Vercel**: Import project from GitHub
- **GitHub Pages**: Upload build files to gh-pages branch
- **Surge.sh**: `surge build/` for instant deployment

### **Cloud Platforms**
- **AWS S3 + CloudFront**: Static website hosting
- **Google Cloud Storage**: Static hosting with CDN
- **Azure Static Web Apps**: Full-stack static app hosting

### **VPS/Server Deployment**
- Use Docker images for consistent deployment
- Nginx configuration included for production serving
- SSL/HTTPS ready configuration

## 📊 **Performance Features**

- **Code Splitting**: Automatic bundle splitting by Create React App
- **Image Optimization**: Optimized assets and lazy loading
- **Gzip Compression**: Nginx configuration includes compression
- **Caching Headers**: Proper cache control for static assets
- **Minification**: Production builds are minified and optimized

## 🔧 **Development**

### **File Structure Guidelines**
- Keep components modular and reusable
- Use semantic naming conventions
- Maintain consistent indentation (2 spaces)
- Follow React best practices

### **Adding New Features**
1. Create new components in `src/components/`
2. Import and use in `App.js`
3. Add corresponding styles in component files
4. Update routing if necessary

### **Styling Guidelines**
- Use Tailwind utility classes primarily
- Custom styles in component-specific files
- Maintain consistent spacing and typography
- Follow mobile-first responsive design

## 🤝 **Contributing**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ **Contact & Support**

**Moiz Ahmed Khan**
- 📧 **Email**: [talktomoiz07@gmail.com](mailto:talktomoiz07@gmail.com)
- 💼 **LinkedIn**: [moiz-ahmed07](https://linkedin.com/in/moiz-ahmed07)
- 🐱 **GitHub**: [Exploitdaworld](https://github.com/Exploitdaworld)
- 📍 **Location**: Karachi, Pakistan

---

## 🌟 **Show Your Support**

If you found this project helpful or interesting:

- ⭐ **Star** this repository
- 🍴 **Fork** it for your own use
- 📢 **Share** it with others
- 🐛 **Report** any bugs you find
- 💡 **Suggest** new features

---

<div align="center">

**Built with ❤️ by [Moiz Ahmed Khan](https://github.com/Exploitdaworld)**

*Crafting tomorrow's systems today* 🚀

</div>
