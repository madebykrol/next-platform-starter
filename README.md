# Magical Travel Timeline

A Harry Potter-inspired travel timeline application built with Next.js 16, featuring animated milestones, Gryffindor colors, and a real-time "wizard" indicator showing your current position in the journey.

![Magical Timeline](https://github.com/user-attachments/assets/7189442f-8941-4e94-997c-5b07e296169a)

## Features

- ⚡ **Harry Potter Theme**: Gryffindor-inspired color scheme with magical animations
- 🔮 **Animated Timeline**: Shows your journey progress with glowing effects
- 🧙 **Live Position Indicator**: An animated wizard wand icon shows where you are "now" on the timeline
- 📍 **Milestone Tracking**: Add unlimited milestones with custom icons and descriptions
- ✨ **Easy to Edit**: Simple JSON file configuration for all timeline data
- 🎨 **Responsive Design**: Works beautifully on all screen sizes

## Quick Start

1. Clone this repository and install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to see your magical timeline!

## Customizing Your Timeline

Edit the `/public/timeline.json` file to customize your journey. See [TIMELINE_GUIDE.md](TIMELINE_GUIDE.md) for detailed instructions.

### Simple Example

```json
{
  "startDate": "2025-12-15T09:00:00Z",
  "title": "My Magical Journey",
  "milestones": [
    {
      "id": "start",
      "title": "Journey Begins",
      "description": "The adventure starts here",
      "date": "2025-12-15T09:00:00Z",
      "icon": "train"
    }
  ]
}
```

### Available Icons
- `train` - Travel/Transport
- `castle` - Destinations/Buildings
- `tree` - Nature/Forests
- `shop` - Shopping/Markets
- `wand` - Magic/Special Events
- `star` - Achievements/Celebrations

## Deploying to Netlify

This app is built on Next.js 16 and works seamlessly with Netlify's platform.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/madebykrol/next-platform-starter)

## Developing Locally with Netlify

For full functionality locally (e.g. edge functions, blob store), ensure you have Netlify CLI:

```bash
npm install netlify-cli@latest -g
netlify link
netlify dev
```

If your browser doesn't navigate automatically, visit [localhost:8888](http://localhost:8888).

## Technology Stack

- **Next.js 16** - React framework with App Router and Turbopack
- **Tailwind CSS 4** - Utility-first CSS framework
- **Netlify Platform** - Deployment and hosting with edge functions
- **React 19** - Latest React with concurrent features

## Resources

- [Next.js on Netlify docs](https://docs.netlify.com/frameworks/next-js/overview/)
- [Timeline Customization Guide](TIMELINE_GUIDE.md)
