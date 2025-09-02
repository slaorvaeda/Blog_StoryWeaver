# Archi Magazine - Next.js Application

A modern, responsive architecture magazine website built with Next.js 15 and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist architecture-focused design
- **Responsive Layout**: Mobile-first responsive design
- **Component Library**: Reusable UI components for consistency
- **Next.js 15**: Latest Next.js with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript Ready**: Easy to convert to TypeScript

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   ├── magazine/          # Magazine section
│   │   │   ├── layout.js      # Magazine layout
│   │   │   └── page.js        # Magazine page
│   │   ├── about/             # About page
│   │   │   └── page.js
│   │   └── contact/           # Contact page
│   │       └── page.js
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── ImageCard.jsx
│   │   │   ├── Typography.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ArticleCard.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Grid.jsx
│   │   │   ├── MobileNav.jsx
│   │   │   ├── index.js      # Component exports
│   │   │   └── README.md     # Component documentation
│   │   └── layout/           # Layout components
│   └── styles/               # Global styles
└── public/                   # Static assets
```

## 🎨 UI Component Library

The application includes a comprehensive set of reusable UI components:

### Layout Components
- **Header**: Navigation header with logo and menu
- **Sidebar**: Flexible sidebar with page numbers and social links
- **Container**: Consistent layout containers
- **Grid**: Flexible grid system

### Content Components
- **ImageCard**: Image display with shadows and effects
- **ArticleCard**: Article preview cards
- **Card**: General-purpose content cards

### Interactive Components
- **Button**: Multi-variant button component
- **Modal**: Modal overlay component
- **MobileNav**: Mobile navigation menu

### Typography Components
- **Heading**: Heading components (H1-H6)
- **Subtitle**: Subtitle components
- **BodyText**: Paragraph text components
- **Caption**: Small text components

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Pages

### Home Page (`/`)
- Hero section with call-to-action
- Feature overview
- Magazine preview

### Magazine Page (`/magazine`)
- Article display with navigation
- Left sidebar with page numbers
- Right sidebar with article list
- Modal for full article view

### About Page (`/about`)
- Company story
- Team information
- Mission and values

### Contact Page (`/contact`)
- Contact form
- Contact information
- Office hours

## 🎯 Usage Examples

### Using UI Components

```jsx
import { Button, Card, Heading, BodyText } from '../components/ui';

export default function MyPage() {
  return (
    <Card className="p-6">
      <Heading level={1}>Page Title</Heading>
      <BodyText>This is some content.</BodyText>
      <Button onClick={() => console.log('clicked')}>
        Click Me
      </Button>
    </Card>
  );
}
```

### Creating New Pages

1. Create a new directory in `src/app/`
2. Add a `page.js` file
3. Import and use UI components
4. Add navigation links in the Header component

## 🎨 Customization

### Styling
- Components use Tailwind CSS classes
- Easy to customize with className props
- Consistent design system

### Themes
- Light theme by default
- Easy to add dark mode support
- CSS custom properties for theming

### Adding New Components
1. Create component in `src/components/ui/`
2. Add to `src/components/ui/index.js`
3. Update documentation in `src/components/ui/README.md`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
The project is ready for Vercel deployment with zero configuration.

## 📚 Documentation

- **Component Library**: See `src/components/ui/README.md`
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Tailwind CSS**: [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the component documentation
- Review the Next.js and Tailwind CSS docs
