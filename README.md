# Teddy Duncan Jr. - Academic Portfolio

A professional academic portfolio website showcasing publications, teaching experience, scholarly work, and freelance writing.

## Features

- **Traditional Academic Design**: Classic serif typography with elegant navy and burgundy color scheme
- **Interactive Publications Library**: Advanced filtering and search with citation generator
- **3D Book Showcase**: Featured books with 3D cover effects and purchase links
- **Dynamic Timeline**: Interactive career timeline with expandable details
- **Freelance Writing Portfolio**: Filterable collection of articles and reviews
- **Dark/Light Mode**: Theme toggle for optimal reading experience
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered transitions and effects

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **React Icons**: Comprehensive icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
Portfolio-2/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── sections/
│   ├── context/
│   ├── data/
│   └── App.jsx
└── README.md
```

## Sections

- **Hero**: Professional introduction with headshot
- **About**: Academic expertise and research interests
- **Education**: Academic credentials
- **Experience**: Interactive career timeline
- **Books**: Featured publications with purchase links
- **Publications**: Filterable academic articles with citations
- **Freelance Writing**: Magazine articles and reviews
- **Awards**: Recognition and service
- **Contact**: Contact information and form

## Customization

All content is stored in `/src/data/` files:
- `about.js`: Personal information
- `education.js`: Educational background
- `experience.js`: Professional experience
- `books.js`: Published books
- `publications.js`: Academic publications
- `freelanceWriting.js`: Magazine articles
- `awards.js`: Awards and service

## Deployment

The site is configured for GitHub Pages deployment. Update the `base` path in `vite.config.js` if deploying to a different platform.

## License

© 2024 Teddy Duncan Jr. All rights reserved.