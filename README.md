# NKORE DRUM

A storytelling platform dedicated to amplifying the voices and narratives of Western Uganda.

## About

NKORE DRUM is a platform focused on documenting the "Rhythms of Growth" across Western Uganda. Our mission is to amplify underrepresented voices, preserve culture and heritage, and engage stakeholders in meaningful conversations for the region's advancement.

## Features

- **Culture & Heritage**: Traditional customs, beliefs, art forms, oral histories, festivals, and iconic landmarks
- **Sports & Analytics**: Coverage of sports events, teams, local athletes, and performance tracking
- **Business & Innovation**: Spotlighting entrepreneurs, businesses, innovations, and industries
- **Arts & Entertainment**: Promoting artists, musicians, filmmakers, and creative expression
- **Socioeconomic Development**: Addressing education, healthcare, infrastructure, and sharing innovative solutions

## Geographic Coverage

- **Ankole Sub-region**: Mbarara, Bushenyi, Ntungamo, Isingiro, Ibanda, Kiruhura, Sheema, Rubirizi, Buhweju, and Mitooma
- **Kigezi Sub-region**: Kabale, Kisoro, Rukungiri, Kanungu, Rubanda, and Rukiga
- **Bunyoro Sub-region**: Hoima, Masindi, Buliisa, Kiryandongo, Kakumiro, Kibaale, and Kagadi
- **Toro Sub-region**: Fort Portal (Kabarole), Kasese, Kyenjojo, Kamwenge, Bundibugyo, and Ntoroko

## Contact

- **Email**: nkoredrum@gmail.com
- **Phone**: 0740611525
- **Location**: Mbarara, Western Uganda
- **Social Media**: @nkoredrum

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd western-uganda-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
.
├── src/
│   ├── _includes/      # Reusable components
│   ├── _layouts/       # Layout templates
│   ├── assets/         # Static assets (CSS, images)
│   ├── posts/          # Blog posts
│   └── index.njk       # Homepage
├── .eleventy.js        # 11ty configuration
└── package.json        # Project dependencies
```

## Adding New Posts

Create new blog posts in the `src/posts` directory using Markdown format. Each post should include front matter with:

```yaml
---
layout: base.njk
title: Your Post Title
description: A brief description
date: YYYY-MM-DD
image: /assets/images/your-image.jpg
tags: tag1, tag2
---
```

## Deployment

This site is optimized for deployment on Netlify. Simply connect your repository to Netlify and it will automatically build and deploy your site.

## License

This project is licensed under the ISC License. 