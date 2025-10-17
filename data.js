/**
 * Sample Solar Time Data for Alexandria, VA (22310)
 * Generated for October 16-30, 2025
 */

const SAMPLE_LOCATION = {
  zipCode: '22310',
  city: 'Alexandria',
  state: 'VA',
  latitude: 38.8048,
  longitude: -77.0469
};

/**
 * Solar time data structure:
 * - astronomicalDawn: Sun 18° below horizon (first light)
 * - nauticalDawn: Sun 12° below horizon (horizon visible)
 * - civilDawn: Sun 6° below horizon (outdoor activities possible)
 * - sunrise: Sun crosses horizon
 * - goldenHourMorningEnd: End of morning golden hour
 * - solarNoon: Sun at highest point
 * - goldenHourEveningStart: Start of evening golden hour
 * - sunset: Sun crosses horizon
 * - civilDusk: Sun 6° below horizon
 * - nauticalDusk: Sun 12° below horizon
 * - astronomicalDusk: Sun 18° below horizon (complete darkness)
 */

const SAMPLE_SOLAR_DATA = [
  {
    date: '2025-10-16',
    astronomicalDawn: '05:50',
    nauticalDawn: '06:23',
    civilDawn: '06:51',
    sunrise: '07:18',
    goldenHourMorningEnd: '08:00',
    solarNoon: '12:53',
    goldenHourEveningStart: '17:46',
    sunset: '18:27',
    civilDusk: '18:55',
    nauticalDusk: '19:23',
    astronomicalDusk: '19:56',
    dayLength: '11h 09m'
  },
  {
    date: '2025-10-17',
    astronomicalDawn: '05:51',
    nauticalDawn: '06:24',
    civilDawn: '06:52',
    sunrise: '07:19',
    goldenHourMorningEnd: '08:01',
    solarNoon: '12:53',
    goldenHourEveningStart: '17:44',
    sunset: '18:26',
    civilDusk: '18:53',
    nauticalDusk: '19:21',
    astronomicalDusk: '19:54',
    dayLength: '11h 07m'
  },
  {
    date: '2025-10-18',
    astronomicalDawn: '05:52',
    nauticalDawn: '06:25',
    civilDawn: '06:53',
    sunrise: '07:20',
    goldenHourMorningEnd: '08:02',
    solarNoon: '12:53',
    goldenHourEveningStart: '17:43',
    sunset: '18:25',
    civilDusk: '18:52',
    nauticalDusk: '19:20',
    astronomicalDusk: '19:53',
    dayLength: '11h 05m'
  },
  {
    date: '2025-10-19',
    astronomicalDawn: '05:53',
    nauticalDawn: '06:26',
    civilDawn: '06:54',
    sunrise: '07:21',
    goldenHourMorningEnd: '08:03',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:41',
    sunset: '18:23',
    civilDusk: '18:51',
    nauticalDusk: '19:19',
    astronomicalDusk: '19:52',
    dayLength: '11h 02m'
  },
  {
    date: '2025-10-20',
    astronomicalDawn: '05:54',
    nauticalDawn: '06:27',
    civilDawn: '06:55',
    sunrise: '07:22',
    goldenHourMorningEnd: '08:04',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:40',
    sunset: '18:22',
    civilDusk: '18:50',
    nauticalDusk: '19:18',
    astronomicalDusk: '19:51',
    dayLength: '11h 00m'
  },
  {
    date: '2025-10-21',
    astronomicalDawn: '05:55',
    nauticalDawn: '06:28',
    civilDawn: '06:56',
    sunrise: '07:23',
    goldenHourMorningEnd: '08:05',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:38',
    sunset: '18:20',
    civilDusk: '18:48',
    nauticalDusk: '19:16',
    astronomicalDusk: '19:49',
    dayLength: '10h 57m'
  },
  {
    date: '2025-10-22',
    astronomicalDawn: '05:56',
    nauticalDawn: '06:29',
    civilDawn: '06:57',
    sunrise: '07:24',
    goldenHourMorningEnd: '08:06',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:37',
    sunset: '18:19',
    civilDusk: '18:47',
    nauticalDusk: '19:15',
    astronomicalDusk: '19:48',
    dayLength: '10h 55m'
  },
  {
    date: '2025-10-23',
    astronomicalDawn: '05:57',
    nauticalDawn: '06:30',
    civilDawn: '06:58',
    sunrise: '07:25',
    goldenHourMorningEnd: '08:07',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:36',
    sunset: '18:18',
    civilDusk: '18:46',
    nauticalDusk: '19:14',
    astronomicalDusk: '19:47',
    dayLength: '10h 53m'
  },
  {
    date: '2025-10-24',
    astronomicalDawn: '05:58',
    nauticalDawn: '06:31',
    civilDawn: '06:59',
    sunrise: '07:27',
    goldenHourMorningEnd: '08:09',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:34',
    sunset: '18:16',
    civilDusk: '18:44',
    nauticalDusk: '19:12',
    astronomicalDusk: '19:45',
    dayLength: '10h 49m'
  },
  {
    date: '2025-10-25',
    astronomicalDawn: '05:59',
    nauticalDawn: '06:32',
    civilDawn: '07:00',
    sunrise: '07:28',
    goldenHourMorningEnd: '08:10',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:33',
    sunset: '18:15',
    civilDusk: '18:43',
    nauticalDusk: '19:11',
    astronomicalDusk: '19:44',
    dayLength: '10h 47m'
  },
  {
    date: '2025-10-26',
    astronomicalDawn: '06:00',
    nauticalDawn: '06:33',
    civilDawn: '07:01',
    sunrise: '07:29',
    goldenHourMorningEnd: '08:11',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:32',
    sunset: '18:14',
    civilDusk: '18:42',
    nauticalDusk: '19:10',
    astronomicalDusk: '19:43',
    dayLength: '10h 45m'
  },
  {
    date: '2025-10-27',
    astronomicalDawn: '06:01',
    nauticalDawn: '06:34',
    civilDawn: '07:02',
    sunrise: '07:30',
    goldenHourMorningEnd: '08:12',
    solarNoon: '12:52',
    goldenHourEveningStart: '17:31',
    sunset: '18:13',
    civilDusk: '18:41',
    nauticalDusk: '19:09',
    astronomicalDusk: '19:42',
    dayLength: '10h 43m'
  },
  {
    date: '2025-10-28',
    astronomicalDawn: '06:02',
    nauticalDawn: '06:35',
    civilDawn: '07:03',
    sunrise: '07:31',
    goldenHourMorningEnd: '08:13',
    solarNoon: '12:51',
    goldenHourEveningStart: '17:29',
    sunset: '18:11',
    civilDusk: '18:39',
    nauticalDusk: '19:07',
    astronomicalDusk: '19:40',
    dayLength: '10h 40m'
  },
  {
    date: '2025-10-29',
    astronomicalDawn: '06:03',
    nauticalDawn: '06:36',
    civilDawn: '07:04',
    sunrise: '07:32',
    goldenHourMorningEnd: '08:14',
    solarNoon: '12:51',
    goldenHourEveningStart: '17:28',
    sunset: '18:10',
    civilDusk: '18:38',
    nauticalDusk: '19:06',
    astronomicalDusk: '19:39',
    dayLength: '10h 38m'
  },
  {
    date: '2025-10-30',
    astronomicalDawn: '06:04',
    nauticalDawn: '06:37',
    civilDawn: '07:05',
    sunrise: '07:33',
    goldenHourMorningEnd: '08:15',
    solarNoon: '12:51',
    goldenHourEveningStart: '17:27',
    sunset: '18:09',
    civilDusk: '18:37',
    nauticalDusk: '19:05',
    astronomicalDusk: '19:38',
    dayLength: '10h 36m'
  }
];

/**
 * Solar time descriptions for tooltips
 */
const SOLAR_TIME_DESCRIPTIONS = {
  astronomicalDawn: 'The beginning of astronomical twilight. The sun is 18° below the horizon. The first hint of light appears in the sky. This is when your body begins its natural wake process.',
  nauticalDawn: 'The beginning of nautical twilight. The sun is 12° below the horizon. The horizon becomes visible and general outlines of objects can be distinguished.',
  civilDawn: 'The beginning of civil twilight. The sun is 6° below the horizon. Enough light for outdoor activities without artificial lighting. Optimal natural wake window begins.',
  sunrise: 'The sun crosses the horizon. This is your primary circadian reset point. Being outside during the first 30-60 minutes after sunrise is the most important light exposure of your entire day.',
  goldenHourMorning: 'The hour after sunrise when the sun is low, producing soft, warm, diffused light. Ideal for outdoor activities and light exposure.',
  solarNoon: 'The sun reaches its highest point in the sky. This represents peak light intensity and your peak potential alertness. Brief outdoor exposure here reinforces your circadian rhythm.',
  goldenHourEvening: 'The hour before sunset when the sun is low, producing soft, warm, diffused light. A natural signal to begin winding down.',
  sunset: 'The sun crosses below the horizon. This marks the transition from active to receptive mode. Begin dimming your environment immediately after sunset.',
  civilDusk: 'The end of civil twilight. The sun is 6° below the horizon. Artificial lighting becomes necessary for outdoor activities.',
  nauticalDusk: 'The end of nautical twilight. The sun is 12° below the horizon. The horizon is no longer visible. Natural wind-down period continues.',
  astronomicalDusk: 'The end of astronomical twilight. The sun is 18° below the horizon. Complete darkness begins. Your environment should be very dim or dark from this point forward.'
};

/**
 * Activity recommendations based on solar phase
 */
const SOLAR_PHASE_RECOMMENDATIONS = {
  beforeDawn: {
    phase: 'Pre-Dawn',
    energy: 'Waking',
    activities: ['Gentle wake routine', 'Meditation', 'Light stretching', 'Preparation for the day'],
    avoid: ['Bright artificial light', 'Intense exercise', 'Complex decisions']
  },
  dawn: {
    phase: 'Dawn Period',
    energy: 'Rising',
    activities: ['Morning light exposure', 'Light exercise', 'Hydration', 'Planning the day'],
    avoid: ['Staying indoors', 'Screen time without natural light']
  },
  morning: {
    phase: 'Morning (Sunrise to Solar Noon)',
    energy: 'Peak Rising',
    activities: ['Most demanding work', 'Complex thinking', 'Important decisions', 'Intense exercise', 'Creative projects'],
    avoid: ['Passive activities', 'Napping', 'Heavy meals']
  },
  midday: {
    phase: 'Solar Noon',
    energy: 'Peak',
    activities: ['Brief outdoor reset', 'Light meal', '25-min nap (15 min before/after peak)', 'Vitamin D absorption'],
    avoid: ['Extended indoor isolation', 'Skipping outdoor exposure']
  },
  afternoon: {
    phase: 'Afternoon (Solar Noon to Sunset)',
    energy: 'Sustained/Declining',
    activities: ['Sustained work', 'Physical activity', 'Completion tasks', 'Meetings', 'Collaboration'],
    avoid: ['Starting major new projects', 'Overly intense workouts']
  },
  evening: {
    phase: 'Sunset Transition',
    energy: 'Winding Down',
    activities: ['Lighter activities', 'Meal preparation', 'Family time', 'Gratitude practice', 'Reflection'],
    avoid: ['Bright screens', 'Intense exercise', 'Stressful activities', 'Heavy work']
  },
  twilight: {
    phase: 'Twilight Period',
    energy: 'Low',
    activities: ['Dim lighting', 'Quiet activities', 'Reading', 'Gentle music', 'Sleep preparation'],
    avoid: ['Blue light', 'Stimulating content', 'Arguments', 'Problem-solving']
  },
  night: {
    phase: 'Night',
    energy: 'Rest/Restore',
    activities: ['Sleep', 'Deep rest', 'Cellular repair', 'Memory consolidation'],
    avoid: ['Any light exposure', 'Eating', 'Exercise', 'Screen time']
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SAMPLE_LOCATION,
    SAMPLE_SOLAR_DATA,
    SOLAR_TIME_DESCRIPTIONS,
    SOLAR_PHASE_RECOMMENDATIONS
  };
}
