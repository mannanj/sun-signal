# Sun Signal

A solar time-based scheduling application that helps you align your daily activities with natural light cycles.

## Concept

Sun Signal synchronizes your schedule with the sun's position, helping you leverage your body's natural circadian rhythms for optimal energy and productivity. By aligning activities with solar times (sunrise, solar noon, sunset, and twilight periods), you can work with your biology instead of against it.

## Key Features (Planned)

### Solar Time Data
- Display sunrise, sunset, and solar noon times
- Show astronomical, nautical, and civil twilight times (dawn and dusk)
- Calculate golden hour and blue hour times
- Support any US zip code

### Solar Time Definitions
- **Astronomical Dawn/Dusk**: Sun is 18° below horizon - first/last light
- **Nautical Dawn/Dusk**: Sun is 12° below horizon - horizon becomes visible
- **Civil Dawn/Dusk**: Sun is 6° below horizon - outdoor activities become possible
- **Sunrise/Sunset**: Sun crosses the horizon
- **Golden Hour**: ~1 hour after sunrise, ~1 hour before sunset - optimal warm light
- **Solar Noon**: Sun reaches highest point - peak light intensity

### Schedule Integration
- Add personal schedule items (workout, meals, work blocks, etc.)
- Smart scheduling based on solar phases
- Automatic 25-minute nap scheduled 15 minutes before and after solar noon
- Visual timeline showing activities mapped to solar times
- Recommendations for optimal activity timing based on natural energy curves

### Visual Representation Ideas
1. **Linear Timeline**: Horizontal timeline from dawn to dusk with markers
2. **Circular Clock**: 24-hour clock with solar phases highlighted
3. **Light Gradient**: Background color changing throughout the day
4. **Sun Arc**: Curved path showing sun's journey across the sky
5. **Energy Curve**: Graph overlaying predicted energy levels throughout the day

## Optimal Schedule Philosophy

The app is based on the principle that:
- **Morning (Sunrise → Solar Noon)**: Rising energy - best for demanding work, complex thinking, physical activity
- **Afternoon (Solar Noon → Sunset)**: Descending energy - still productive but preparing for evening
- **Evening (Sunset → Complete Dark)**: Transition period - wind down, dim lights
- **Night (Complete Dark onward)**: Rest and restoration

### Key Anchor Points
1. **Sunrise ±1 hour**: Most important light exposure - be outside
2. **Solar Noon**: Peak alertness - brief outdoor exposure reinforces rhythm
3. **Sunset**: Marks transition - begin dimming environment
4. **Complete Darkness (~90 min after sunset)**: Real night begins

## Tech Stack

- HTML5, CSS3, JavaScript (vanilla)
- Solar calculation algorithms
- Zip code to coordinates API
- Responsive design for mobile and desktop

## Project Structure

```
sun-signal/
├── index.html          # Main application page
├── styles.css          # Application styles
├── app.js             # Main application logic
├── solar.js           # Solar time calculations
├── data.js            # Sample data and constants
└── README.md          # This file
```

## Development Roadmap

1. ✅ Project initialization
2. 🔄 Core solar time calculations
3. 🔄 Zip code to coordinates conversion
4. 🔄 Interactive schedule builder
5. 🔄 Visual timeline/representations
6. 🔄 Mobile-responsive design
7. 🔄 Data persistence (localStorage)
8. 🔄 Export schedule functionality

## Getting Started

Simply open `index.html` in a modern web browser to run the application locally.

Or use a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Documentation

### [Living by Natural Light - Comprehensive Guide](./LIVING_BY_NATURAL_LIGHT.md)

An in-depth exploration of solar rhythms, color biology, and practical frameworks for aligning with natural light cycles. This guide covers:

- **The Eight Phases of Solar Light**: From night to morning blue hour, golden hours, and back to darkness
- **Color Effects on Biology**: How blue, red/orange/gold, and full spectrum light affect your body and mind
- **The Morning Paradox**: Understanding the three-stage natural wake-up system
- **What Animals Do**: Nature's blueprint for daily rhythms across light phases
- **One-Year Natural Light Experiment**: A practical framework for modern humans
- **Structuring Activities by Light Quality**: When to do planning, creative work, socializing, exercise, and more
- **Seasonal Adjustments**: How your schedule naturally flexes with summer and winter
- **Expected Outcomes**: Physical, psychological, spiritual, and social changes from living by natural light

This comprehensive guide provides the scientific and philosophical foundation for the Sun Signal application.

## Future Enhancements

- Weather integration for cloud cover warnings
- Notification system for optimal activity times
- Integration with calendar apps
- Historical tracking of schedule adherence
- Seasonal schedule templates
- Location-based recommendations

## License

MIT License

---

**Created to help you sync with the sun** ☀️
