# Travel Timeline - User Guide

## Overview
This is a magical Harry Potter-inspired travel timeline that displays your journey through time with animated elements and Gryffindor colors.

## How to Edit the Timeline

The timeline is controlled by a simple JSON file located at:
```
/public/timeline.json
```

### JSON Structure

```json
{
  "startDate": "2025-12-15T09:00:00Z",
  "title": "Magical Journey Timeline",
  "milestones": [
    {
      "id": "unique-id",
      "title": "Milestone Title",
      "description": "Description of the milestone",
      "date": "2025-12-15T09:00:00Z",
      "icon": "train"
    }
  ]
}
```

### Fields Explanation

- **startDate**: The beginning of your journey (ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ)
- **title**: The main title displayed at the top of the timeline
- **milestones**: Array of milestone objects

#### Milestone Object

- **id**: Unique identifier for the milestone
- **title**: Name of the milestone
- **description**: Short description of what happens at this milestone
- **date**: When this milestone occurs (ISO 8601 format)
- **icon**: Icon to display (available icons: `train`, `castle`, `tree`, `shop`, `wand`, `star`)

### Available Icons

- `train` - Hogwarts Express / Travel
- `castle` - Castle / Building / Destination
- `tree` - Forest / Nature
- `shop` - Shopping / Market
- `wand` - Magic / Special Event
- `star` - Celebration / Achievement
- `wizard` - Used automatically for the "Now" indicator

## Features

### Current Time Indicator
The timeline automatically shows a glowing animated wizard wand icon at the current position on the timeline, indicating where you are right now in your journey.

### Progress Animation
- The timeline line animates from the start to the current position
- Progress percentage is shown at the bottom
- Past milestones glow with golden light
- Future milestones appear dimmed

### Gryffindor Theme
The design uses the official Gryffindor house colors:
- Gold: `#d4af37`
- Red: `#740001`
- Dark backgrounds for contrast

## Tips

1. **Date Format**: Always use ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) with UTC timezone
2. **Milestone Order**: Arrange milestones chronologically in the JSON
3. **Live Updates**: The "Now" indicator updates every second
4. **Responsive**: Works on all screen sizes

## Example Timeline

To see the current time indicator in action, set dates that span from the past to the future:
- Start date: A few days ago
- Some milestones: In the past
- Current milestone: Around today
- Future milestones: Days or weeks ahead

## Development

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`
