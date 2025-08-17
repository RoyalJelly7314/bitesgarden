/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom color palette for cozy garden theme
        sage: {
          50: '#f7f9f7',
          100: '#e8f0e6',
          200: '#d1e1cd',
          300: '#a8c9a0',
          400: '#7ba86f',
          500: '#5a8a49',
          600: '#446b36',
          700: '#38562c',
          800: '#2f4625',
          900: '#283a21',
        },
        earth: {
          50: '#faf8f5',
          100: '#f3ede4',
          200: '#e6d8c7',
          300: '#d4bda0',
          400: '#c19d75',
          500: '#b08556',
          600: '#9b714a',
          700: '#815c3f',
          800: '#694c37',
          900: '#564030',
        },
        warm: {
          50: '#fef7f2',
          100: '#fdeee3',
          200: '#fad9c2',
          300: '#f6be97',
          400: '#f0996a',
          500: '#ea7c47',
          600: '#db6032',
          700: '#b54b28',
          800: '#923e25',
          900: '#763522',
        },
        muted: {
          red: '#a67c77',
          green: '#7a8471',
          brown: '#8b7355',
          beige: '#c4b59e',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'handwritten': ['Dancing Script', 'Amatic SC', 'Kalam', 'cursive', 'system-ui'],
        'natural': ['Comfortaa', 'Nunito', 'sans-serif', 'system-ui'],
        'serif': ['Crimson Text', 'serif', 'system-ui'],
        'script': ['Great Vibes', 'Dancing Script', 'cursive', 'system-ui'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}