# Deilton Pedro Junior - Portfolio

![Portfolio Preview](https://i.ibb.co/WNy5kdDN/image.png)

## 📋 Overview

This is the professional portfolio website for Deilton Pedro Junior, a Full Stack Developer. The site showcases skills, projects, and professional experience in a modern, responsive design with multilanguage support and dark mode.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Built-in dark mode with system preference detection
- **Multilanguage Support**: Available in Portuguese (Brazil) and English (US)
- **Modern UI**: Clean, professional interface with animations
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Performance Focused**: Optimized for fast loading and smooth interactions

## 🛠️ Technologies

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Shadcn UI**: High-quality UI components
- **Lucide React**: Beautiful, consistent icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deiltonjunior/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header/navigation component
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects section
│   └── skills.tsx        # Skills section
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── ...config files       # Configuration files
```

## 🌐 Deployment

This project is configured for static exports and can be deployed to any static hosting service:

```bash
npm run build
# or
yarn build
```

The static files will be generated in the `out` directory.

## 🔄 Multilanguage Support

The portfolio supports multiple languages through a custom language provider. Currently supported languages:

- Portuguese (Brazil) - Default
- English (US)

To add more languages, extend the translations object in `components/language-provider.tsx`.

## 🎨 Customization

### Theme

The theme colors can be customized in `app/globals.css` by modifying the CSS variables in the `:root` selector.

### Content

Update the content in the respective component files:

- Personal information: `components/hero.tsx` and `components/about.tsx`
- Skills: `components/skills.tsx`
- Projects: `components/projects.tsx`
- Contact information: `components/contact.tsx`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Deilton Pedro Junior - [deiltonp74@gmail.com.com](mailto:deiltonp74@gmail.com.com)

Project Link: [https://github.com/DeJunior007/portfolio](https://github.com/DeJunior007/portfolio)