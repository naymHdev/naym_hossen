# Portfolio Website - Project Guide

A modern, animated portfolio website built with **Next.js 16**, **Radix UI**, and **Framer Motion**.

## 🚀 Quick Start

```bash
npm run dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see your portfolio.

## 📁 Project Structure

### Core Files
- **`app/page.tsx`** - Main portfolio page combining all sections
- **`app/layout.tsx`** - Root layout with dark theme setup
- **`app/globals.css`** - Global styles and design tokens

### Components Organization

#### `/components/layout`
- **`Container.tsx`** - Reusable max-width wrapper with responsive padding
- **`Navigation.tsx`** - Footer with social media links and animations

#### `/components/sections`
- **`HeroSection.tsx`** - Hero intro with profile picture and animated greeting
- **`AboutSection.tsx`** - Bio and background information
- **`WorkSection.tsx`** - Work experience timeline
- **`CertSection.tsx`** - Certifications and courses
- **`EducationSection.tsx`** - Formal education
- **`SkillsSection.tsx`** - Technology skills and tools
- **`ProjectsSection.tsx`** - Featured projects showcase
- **`ContactSection.tsx`** - Call-to-action section

#### `/components/common`
- **`SectionTitle.tsx`** - Reusable animated section heading
- **`ExperienceCard.tsx`** - Work/education card with timeline
- **`ProjectCard.tsx`** - Project showcase card with tech stack
- **`TechBadge.tsx`** - Technology/skill badge component

### Data Layer (`/lib/data`)
All content is separated from components for easy maintenance:
- **`experience.ts`** - Work experience data
- **`certifications.ts`** - Certifications and courses
- **`education.ts`** - Education information
- **`projects.ts`** - Featured projects
- **`skills.ts`** - Technology skills
- **`social-links.ts`** - Social media and contact links

## 🎨 Design System

### Color Palette (Dark Theme)
- **Background**: `#000000` (Pure black)
- **Foreground**: `#ffffff` (White)
- **Primary**: `#3b82f6` (Blue)
- **Secondary**: `#1f2937` (Dark gray)
- **Accent**: `#3b82f6` (Blue)
- **Borders**: `#1f2937` (Subtle gray)

### Typography
- **Font Family**: Geist (system default)
- **Headings**: Bold, larger scale (3xl-4xl)
- **Body**: Regular, readable (1rem, 1.5 line-height)

### Spacing Scale
Uses Tailwind's default spacing: `0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2rem`, etc.

## ✨ Features & Animations

### Framer Motion Animations
1. **Entrance Animations**
   - Fade-in + slide-up on section views
   - Staggered delays for list items
   - Scale and opacity for badges

2. **Scroll Animations**
   - Components animate when they enter viewport
   - `whileInView` triggers smooth animations
   - `once: true` viewport flag prevents re-animation

3. **Interactive Effects**
   - Hover state transitions on cards
   - Smooth color and scale changes
   - 0.3-0.5s animation durations

4. **Special Effects**
   - Wave animation on hero emoji 👋
   - Profile image scales and fades on load
   - Smooth scroll behavior

## 🔧 Customization Guide

### Update Personal Information

#### 1. Work Experience (`lib/data/experience.ts`)
```typescript
{
  id: 'company-id',
  company: 'Company Name',
  position: 'Your Position',
  startDate: 'Jan 2025',
  endDate: 'Present',
  logo: 'AB', // Avatar initials
}
```

#### 2. Skills (`lib/data/skills.ts`)
```typescript
{ id: 'skill-id', name: 'Technology Name' }
```

#### 3. Projects (`lib/data/projects.ts`)
```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Short description',
  fullDescription: 'Detailed description',
  technologies: ['React', 'Next.js'],
  type: 'Featured Project',
}
```

#### 4. Education (`lib/data/education.ts`)
```typescript
{
  id: 'edu-id',
  institution: 'School Name',
  degree: 'Degree',
  field: 'Field of Study',
  startDate: '2023',
  endDate: 'Present',
}
```

#### 5. Social Links (`lib/data/social-links.ts`)
```typescript
{
  id: 'social-id',
  name: 'Platform',
  url: 'https://...',
  icon: 'emoji-or-icon-name',
}
```

### Modify Section Content

Edit the section components in `/components/sections/`:
- Change text content directly
- Adjust animation timings in Framer Motion props
- Modify Tailwind classes for styling

### Change Color Scheme

Edit `/app/globals.css` CSS variables:
```css
:root {
  --background: #000000;
  --primary: #3b82f6;
  /* Update other colors */
}
```

### Adjust Animations

Key animation properties:
- **`duration`**: Animation speed (0.3-0.8s typical)
- **`delay`**: Stagger effect (0.1s per item)
- **`viewport`**: `{ once: true }` - animate only once
- **`transition`**: Timing function (ease, easeInOut)

Example:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  viewport={{ once: true }}
>
```

## 📱 Responsive Design

The site is **mobile-first**:
- **Mobile (default)**: Full width, stacked layout
- **Tablet (md:)**: Adjusted spacing, 2-column grids
- **Desktop (lg:)**: Max-width container, optimized layout

Key responsive utilities:
- `sm:`, `md:`, `lg:` prefixes for breakpoints
- `flex-col md:flex-row` for direction changes
- `grid-cols-1 md:grid-cols-2` for multi-column layouts

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Click Deploy

Vercel automatically:
- Detects Next.js 16
- Installs dependencies
- Builds and deploys

### Environment Variables
Currently no environment variables needed. If adding features:
1. Add to `.env.local` locally
2. Add to Vercel Project Settings → Environment Variables

## 🛠️ Development Tips

### Adding New Sections
1. Create component in `/components/sections/`
2. Add data file in `/lib/data/` if needed
3. Import and add to `app/page.tsx`
4. Wrap with `motion.div` for animations

### Reusing Components
- **`Container`**: Wraps sections with consistent width
- **`SectionTitle`**: Use for all section headings
- **`TechBadge`**: For any tech/skill badges
- **`ExperienceCard`**: For timeline items

### Best Practices
✅ Keep components small and focused
✅ Separate content (data files) from presentation (components)
✅ Use consistent animation patterns
✅ Test on mobile devices
✅ Maintain TypeScript types for data

### Performance Optimization
- Framer Motion uses GPU acceleration (transform, opacity)
- Viewport-based animations prevent unnecessary renders
- Lazy loading with `whileInView` for off-screen content
- Next.js 16 automatic code splitting

## 🎯 Next Steps

1. **Update Content**: Replace demo data with your information
2. **Customize Colors**: Adjust CSS variables for your brand
3. **Add Social Links**: Update URLs in social-links.ts
4. **Tweak Animations**: Adjust timing and effects to your taste
5. **Deploy**: Push to Vercel for live deployment

## 📚 Technologies Used

- **Next.js 16.2.3** - React framework with App Router
- **Framer Motion** - Advanced animations
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **TypeScript** - Type safety

## 💡 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)

---

Built with ❤️ for developers who appreciate clean, maintainable code.
