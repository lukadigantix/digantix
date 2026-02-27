# Digantix Portfolio - Component Documentation

## Project Structure

```
components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx         # Button component with variants
│   ├── Logo.tsx           # Digantix logo component
│   └── index.ts           # UI exports
├── layout/                # Layout components
│   ├── Header.tsx         # Fixed header with navigation
│   └── index.ts           # Layout exports
└── sections/              # Page sections
    ├── HeroSection.tsx    # Hero section component
    └── index.ts           # Section exports
```

## Components

### Button (`components/ui/Button.tsx`)
Reusable button component with multiple variants and sizes.

**Props:**
- `children`: ReactNode - Button content
- `variant`: 'primary' | 'secondary' | 'outline' - Button style (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' - Button size (default: 'md')
- `className`: string - Additional CSS classes

**Usage:**
```tsx
<Button variant="primary" size="lg">
  Click me
</Button>
```

### Logo (`components/ui/Logo.tsx`)
Digantix logo component with icon and text.

**Props:**
- `className`: string - Additional CSS classes

**Usage:**
```tsx
<Logo className="text-black" />
```

### Header (`components/layout/Header.tsx`)
Fixed header with logo and hamburger menu. Features:
- Sticky positioning
- Glass morphism effect (backdrop blur)
- Animated hamburger menu
- Mobile-responsive navigation

**Usage:**
```tsx
<Header />
```

### HeroSection (`components/sections/HeroSection.tsx`)
Main hero section with heading, subtitle, CTA button, and image container.

**Props:**
- `title`: string - Main heading text
- `subtitle`: string - Subtitle/description text
- `ctaText`: string - Call-to-action button text
- `ctaHref`: string - Button link (default: '#contact')

**Usage:**
```tsx
<HeroSection
  title="Digital product design and technology partner"
  subtitle="Working alongside ambitious startups..."
  ctaText="Let's discuss your project"
  ctaHref="#contact"
/>
```

## Design Principles

1. **Component-Based Architecture**: Each UI element is isolated in its own component for maximum reusability
2. **TypeScript**: Full type safety with proper interfaces
3. **Responsive Design**: Mobile-first approach with Tailwind responsive classes
4. **Accessibility**: Semantic HTML and ARIA labels where needed
5. **Clean Code**: Following React best practices and senior-level organization

## Customization

### Colors
Modify Tailwind classes in components to match your brand:
- Primary color: Currently black (`bg-black`, `text-black`)
- Accent colors can be added to the Tailwind config

### Typography
Font sizes and weights can be adjusted in individual components or globally via Tailwind config.

### Animations
The header hamburger menu includes CSS transitions. Add more with Tailwind's animation utilities.

## Next Steps

1. Add your logo SVG/image to replace the placeholder in Logo component
2. Add hero image/video to the HeroSection
3. Implement additional sections (Services, Work, About, Contact)
4. Add smooth scroll functionality
5. Implement the contact form
