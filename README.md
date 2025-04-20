# Western Uganda Blog

A modern, fast blog site built with 11ty (Eleventy) to showcase content about Western Uganda's culture, tourism, and stories.

## Features

- Fast and lightweight
- Responsive design
- Blog post support with Markdown
- Category organization
- Modern UI with clean typography
- SEO friendly

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