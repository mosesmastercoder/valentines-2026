# Valentines 2026

Hello this is a small, personal Valentine's invitation website made for my girlfriend.

The page asks a simple question: **Will you be my Valentine for the fourth time?** It is designed to feel playful, personal, and a little surprising rather than like a standard invitation.

## Features

- **Three color themes**
  - Based on her favorite colors at the time
- Themes can be changed using the color buttons in the top-right corner.
- The selected theme is saved in the browser with `localStorage`, so it stays selected when the page is reopened.
- **Interactive No counter**
  - Every time she clicks `No`, the page counts it as a playful interaction.
  - After she clicks `Yes`, the invitation displays how many times she clicked `No`.
- **Animated envelope reveal**
  - Clicking `Yes` transitions to an opening envelope with a personal message.
- **Video surprise**
  - Clicking `Click to see surprise` opens and plays `surprise.mp4`.
  - The video is a personal twerking surprise from me.

## Project Structure

```
.
├── index.html     # Page structure and invitation content
├── style.css      # Layout, themes, animations, and responsive styles
├── script.js      # Theme selection, No counter, and page interactions
└── surprise.mp4   # Personal video surprise
```
