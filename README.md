Coffee Haven – Modern Coffee Shop Website
Live Demo

🔗 [Deployed URL Here]

-- Project Overview

Coffee Haven is a modern coffee shop website built using React and styled with Tailwind CSS.
The design is inspired by the furniture layout you provided, adapted creatively to match a warm, coffee-themed aesthetic.
The site showcases the brand’s identity through hero sections, product highlights, testimonials, and custom layouts.

-- Brand Identity
Color System
Name	HEX	Usage
Primary Brown	#8B4513	Represents coffee warmth & richness
Cream White	#F8F5F2	Soft background for readability
Deep Black	#1A1A1A	Text and contrast
Coffee Gold	#D4A373	Accent color used in buttons & highlights
Mint Green	#00B894	Call-to-action buttons inspired by layout
Typography

Headings: Tailwind font-bold + large sizes
Reason: Creates strong hierarchy and modern feel.

Body Text: Tailwind font-normal text-gray-600
Reason: Comfortable, clean and readable.

 Design Decisions
Layout Adherence

The site follows the structure of the layout you shared (hero → stats → featured section → product grid → testimonials).

Used Tailwind spacing system (px-16, py-20, gap-8, h-75, etc.) to match the proportions of the layout.

Used Flexbox + Grid to recreate the arrangement of images exactly as in the reference design.

Creative Departures

Replaced furniture themes with coffee-based content while retaining the modern aesthetic.

Used real coffee shop tone—warm, cozy, and premium.

Added overlays, gradients, and subtle shadows for a more professional, branded look.

Adjusted MD breakpoint sections to ensure images stack cleanly on mobile.

    
Each section is isolated and reusable.

Layout components (Header/Footer) appear globally.

Sections follow atomic structure (clean, maintainable, scalable).

--Performance Optimizations
Used lazy-loaded images where applicable.

Optimized JPG sizes before importing.

Tailwind’s JIT engine removes unused CSS classes.

Reused components to avoid redundant re-renders.

Image Credits

Hero images from pintrest

Coffee product images from pintrest

Testimonials images from my own gallery


Technologies Used

React (Vite)

Tailwind CSS

Node.js & npm

Render / GitHub for deployment

--Challenges & Solutions
1. Tailwind Not Working (Blank Screen)

Cause: Missing content paths in tailwind.config.js

2. Images Not Loading

Cause: Wrong image paths
Layout Breaking on Mobile

Cause: Wrong flex directions
3. Layout Breaking on Mobile

Cause: Wrong flex directions
Solution: Used responsive Tailwind classes:

Future Improvements

Add a functional cart system.

Connect to a backend (Node/Express) for real products.

Improve animations using Framer Motion.

Add dark mode support.
