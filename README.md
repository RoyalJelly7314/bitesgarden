# Garden Recipes 🌿🍳

A beautiful, cozy recipes website built with React, TypeScript, and shadcn/ui. Featuring a warm, garden-inspired design with handwritten fonts and earthy colors.

## ✨ Features

- **Beautiful Design**: Cozy, garden-themed UI with handwritten fonts and earthy colors
- **Recipe Categories**: Browse recipes by category (Breakfast, Lunch, Dinner, Desserts, etc.)
- **Responsive Layout**: Works beautifully on desktop, tablet, and mobile devices
- **Recipe Details**: View full recipe details with ingredients and step-by-step instructions
- **Modern Stack**: Built with React 18, TypeScript, and Vite for optimal performance
- **No Backend Required**: Fully static website ready for deployment

## 🎨 Design Features

- **Typography**: Handwritten (Kalam) and natural (Comfortaa) fonts for a cozy feel
- **Color Palette**: 
  - Earthy greens (sage tones)
  - Warm browns (earth tones)
  - Soft beiges
  - Muted reds (warm accents)
- **Layout**: Clean, card-based design with smooth animations and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd garden-recipes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── RecipeCard.tsx  # Recipe card component
│   └── RecipeModal.tsx # Recipe details modal
├── data/               # Recipe data
│   └── recipes.ts      # Sample recipe data
├── lib/                # Utility functions
│   └── utils.ts        # Class name utilities
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Built With

- **React 18**: Modern React with hooks and TypeScript
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, accessible UI components
- **Radix UI**: Accessible primitives for UI components
- **Lucide React**: Beautiful icon library

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Collapsible navigation for mobile devices
- Responsive grid layouts
- Touch-friendly interactions

## 🚀 Production Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🌐 Deployment Options

This is a static website that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🔧 Customization

### Adding New Recipes

Edit `src/data/recipes.ts` to add new recipes. Each recipe should follow the `Recipe` interface:

```typescript
interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  cookTime: string;
  prepTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  tags: string[];
}
```

### Customizing Colors

The color palette can be customized in `tailwind.config.js`. The theme includes:
- `sage`: Green tones
- `earth`: Brown tones
- `warm`: Red/orange tones

### Adding Categories

Update the `categories` array in `src/data/recipes.ts` to add new recipe categories.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for those who love cooking with fresh, natural ingredients.