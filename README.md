# Valentine's Day Landing Page 💝

A modern, captivating Valentine's Day themed one-page website for capturing leads from users who missed Valentine's Day.

## Features

- ✨ **3D Floating Hearts Animation** - Captivating 3D animations with mouse parallax on desktop
- 📱 **Mobile-First Responsive Design** - Optimized for all devices with different animations per breakpoint
- 🔥 **Firebase Integration** - Stores submissions in Firestore database
- ✅ **Form Validation** - Client-side validation with clear error messages
- 🎨 **Modern UI/UX** - Glassmorphism, gradient text, neon glows, and smooth animations
- 💝 **Success Animations** - Particle burst effect on successful form submission

## Tech Stack

- **React 19** with TypeScript
- **Styled Components** for CSS-in-JS
- **Framer Motion** for 3D animations
- **Firebase** for data storage
- **Create React App** for build tooling

## Getting Started

### Prerequisites

- Node.js 16+ installed
- Firebase project set up (project: zonke-tech-landing-pages)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd valentines
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` and add your Firebase credentials:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
REACT_APP_FIREBASE_PROJECT_ID=zonke-tech-landing-pages
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
REACT_APP_FIREBASE_APP_ID=your_app_id_here
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

5. Start the development server:
```bash
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

```
/src
  /components
    /Valentine          # Main Valentine's page component
      ValentinePage.tsx # Form logic, state, Firebase submission
      styles.ts         # Styled components
      index.ts          # Export barrel
    /Hearts3D           # 3D hearts animation component
      Hearts3D.tsx      # Animation logic with parallax
      styles.ts         # Animation styles
      index.ts          # Export barrel
  /config
    firebase.ts         # Firebase initialization
  /styles
    theme.ts            # Design system (colors, spacing, etc.)
    GlobalStyles.ts     # Global CSS reset and fonts
  /utils
    valentineMessages.ts # Form validation helpers
  App.tsx               # Root component with theme provider
  index.tsx             # React entry point
  styled.d.ts           # TypeScript theme declarations
```

## Firebase Setup

The app stores form submissions in a Firestore collection called `valentines`.

### Document Schema

```typescript
{
  name: string,        // User's full name
  phone: string,       // Phone number (digits only)
  email: string,       // Email address (lowercase)
  timestamp: Timestamp // Server-generated timestamp
}
```

### Security Rules

Add these Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /valentines/{document} {
      // Allow anyone to create new entries
      allow create: if request.resource.data.keys().hasAll(['name', 'phone', 'email', 'timestamp'])
                    && request.resource.data.size() <= 5;

      // No public read/update/delete access
      allow read, update, delete: if false;
    }
  }
}
```

## Customization

### Colors

Edit `/src/styles/theme.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#FF4458',  // Main Valentine's red
  // ... other colors
}
```

### Copy/Messaging

Edit `/src/components/Valentine/ValentinePage.tsx` to change the text:

```typescript
<Title>Your Custom Title</Title>
<Subtitle>Your custom subtitle text.</Subtitle>
```

### Animation Settings

Adjust hearts count and animations in `/src/components/Hearts3D/Hearts3D.tsx`:

```typescript
const heartCount = isMobile ? 8 : 20;  // Change heart count
```

## Performance

- **Desktop:** 20 floating 3D hearts with mouse parallax
- **Mobile:** 8 simplified hearts, no parallax (optimized for battery)
- **GPU Acceleration:** Uses `transform: translateZ(0)` and `will-change`
- **60 FPS:** Smooth animations across all devices

## License

MIT

## Credits

Built with ❤️ for capturing Valentine's Day leads.
