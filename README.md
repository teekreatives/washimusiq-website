# WashiMusiq Official Website

A modern, responsive website for WashiMusiq - Kenyan Afrohouse Producer & DJ.

## Features

### PWA (Progressive Web App) Features
- **Installable**: Users can install the website as a native app on their devices
- **Offline Support**: Core functionality works without internet connection
- **Auto Updates**: Automatically updates when new versions are available
- **App-like Experience**: Full-screen mode with native app feel

### Website Features
- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes
- **Music Integration**: Spotify embeds and music platform links
- **Social Media Integration**: YouTube and Instagram feeds
- **Contact Form**: Easy way for fans to get in touch
- **Newsletter Signup**: Stay updated with latest releases
- **Events Section**: Showcase upcoming performances
- **Testimonials**: Social proof from industry professionals

## PWA Installation

### For Users:
1. Visit the website on a supported browser (Chrome, Edge, Safari)
2. Look for the "Install App" button (appears when installable)
3. Click "Install" when prompted
4. The app will be added to your home screen/app launcher

### For Developers:
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## PWA Configuration

The PWA is configured with:
- **Service Worker**: Handles caching and offline functionality
- **Web App Manifest**: Defines app appearance and behavior
- **Auto Updates**: Service worker automatically updates when new content is available
- **Large File Support**: Configured to cache files up to 10MB

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- PWA Plugin (vite-plugin-pwa)
- Lucide React Icons
- React Icons

## Browser Support

- Chrome 67+
- Edge 79+
- Firefox 67+
- Safari 11.1+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Service worker caching for faster loading
- Compressed assets for reduced bandwidth usage 