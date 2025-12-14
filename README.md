# Modern Portfolio Website

A professional, modern portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. This portfolio is fully JSON-driven, making it easy to update content without touching the code.

## ✨ Features

- 🎨 **Modern UI/UX** with glassmorphism effects and smooth animations
- 🌓 **Dark/Light Theme Toggle** with smooth transitions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🚀 **Performance Optimized** - Fast loading and smooth interactions
- 📝 **JSON-Driven Content** - Update all content by editing a single JSON file
- ♿ **Accessible** - ARIA labels and keyboard navigation support
- 🎭 **Smooth Animations** - Using Framer Motion for delightful interactions
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and theme variables
│   └── fonts/              # Custom fonts
├── components/
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── Hero.tsx            # Hero section with introduction
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills organized by categories
│   ├── Projects.tsx        # Projects grid with hover effects
│   ├── Experience.tsx      # Work experience & education timeline
│   ├── Contact.tsx         # Contact form and information
│   ├── Footer.tsx          # Footer with social links
│   ├── ThemeToggle.tsx     # Theme toggle button
│   └── ThemeProvider.tsx   # Theme context provider
├── data/
│   └── portfolio.json      # All portfolio content (JSON-driven)
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json           
├── tsconfig.json          
├── tailwind.config.ts     
└── README.md              
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/preethel/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Updating Content

All portfolio content is stored in `data/portfolio.json`. Simply edit this file to update:

### JSON Structure

```json
{
  "personal": {
    "name": "Your Name",
    "username": "yourusername",
    "title": "Your Title",
    "bio": "Your bio...",
    "location": "Your Location",
    "email": "your@email.com",
    "phone": "+1-XXX-XXX-XXXX",
    "avatar": "/avatar.png",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername",
      "website": "https://yourwebsite.com"
    }
  },
  "skills": {
    "Frontend": ["React", "Next.js", "TypeScript", ...],
    "Backend": ["Node.js", ".NET Core", ...],
    "Database": ["PostgreSQL", "MongoDB", ...],
    ...
  },
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "description": "Project description...",
      "techStack": ["Tech1", "Tech2", ...],
      "features": ["Feature 1", "Feature 2", ...],
      "githubUrl": "https://github.com/...",
      "liveUrl": "https://...",
      "image": "/projects/image.png",
      "featured": true
    }
  ],
  "experience": [...],
  "education": [...],
  "achievements": [...]
}
```

### Customizing Sections

1. **Personal Information**: Update the `personal` object in `portfolio.json`
2. **Skills**: Modify the `skills` object - categories are automatically displayed
3. **Projects**: Add/edit projects in the `projects` array
4. **Experience**: Update work history in the `experience` array
5. **Education**: Modify the `education` array
6. **Achievements**: Add certifications in the `achievements` array

## 🎨 Customizing Theme

Edit `app/globals.css` to customize colors and theme:

```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
}

[data-theme="dark"] {
  --background: #0f172a;
  --foreground: #f1f5f9;
  ...
}
```

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/preethel/portfolio)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Deploy to GitHub Pages

For static export:
1. Update `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
```
2. Build: `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Geist Sans & Mono

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Md. Nur-A-Redwan-Ul-Azam
- GitHub: [@preethel](https://github.com/preethel)
- LinkedIn: [preethel](https://bd.linkedin.com/in/preethel)
- Email: azam13bh@outlook.com

---

Built with ❤️ using Next.js and Tailwind CSS
