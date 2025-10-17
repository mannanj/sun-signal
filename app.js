/**
 * Sun Signal - Main Application JavaScript
 */

// State management
let currentDate = new Date().toISOString().split('T')[0];
let currentZipCode = '22310';
let userSchedule = [
    {
        id: 1,
        name: 'Morning Nap (Pre-Peak)',
        timing: 'noon-before',
        time: '12:28',
        duration: 25,
        description: '15 min before solar noon'
    },
    {
        id: 2,
        name: 'Afternoon Nap (Post-Peak)',
        timing: 'noon-after',
        time: '13:18',
        duration: 25,
        description: '15 min after solar noon'
    }
];

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('Sun Signal initializing...');

    // Set initial date
    document.getElementById('selectedDate').value = currentDate;

    // Render all components
    renderCalendar();
    renderTodaysTimes();
    renderRecommendations();
    renderSchedule();
    updateSunArc();

    // Attach event listeners
    attachEventListeners();

    console.log('Sun Signal initialized successfully');
}

function attachEventListeners() {
    // Date navigation
    document.getElementById('prevDay').addEventListener('click', () => changeDate(-1));
    document.getElementById('nextDay').addEventListener('click', () => changeDate(1));
    document.getElementById('selectedDate').addEventListener('change', (e) => {
        currentDate = e.target.value;
        updateViews();
    });

    // Location update
    document.getElementById('updateLocation').addEventListener('click', updateLocation);
    document.getElementById('zipCode').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') updateLocation();
    });

    // Schedule builder
    document.getElementById('activityTiming').addEventListener('change', (e) => {
        const customGroup = document.getElementById('customTimeGroup');
        customGroup.style.display = e.target.value === 'custom' ? 'block' : 'none';
    });

    document.getElementById('addActivity').addEventListener('click', addActivity);
}

function changeDate(days) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + days);
    currentDate = date.toISOString().split('T')[0];
    document.getElementById('selectedDate').value = currentDate;
    updateViews();
}

function updateLocation() {
    const zipCode = document.getElementById('zipCode').value.trim();

    if (!/^\d{5}$/.test(zipCode)) {
        alert('Please enter a valid 5-digit ZIP code');
        return;
    }

    currentZipCode = zipCode;

    // In a full implementation, this would call an API
    // For now, we'll just update the display
    alert(`Location update requested for ZIP: ${zipCode}\n\nNote: Full zip code integration coming soon. Currently showing data for Alexandria, VA (22310).`);
}

function renderCalendar() {
    const tbody = document.getElementById('calendarBody');
    tbody.innerHTML = '';

    SAMPLE_SOLAR_DATA.forEach(day => {
        const row = document.createElement('tr');
        const isToday = day.date === currentDate;

        if (isToday) {
            row.classList.add('today');
        }

        row.innerHTML = `
            <td ${isToday ? 'class="today"' : ''}>${formatDate(day.date)}</td>
            <td>${day.astronomicalDawn}</td>
            <td>${day.sunrise}</td>
            <td>${day.solarNoon}</td>
            <td>${day.sunset}</td>
            <td>${day.astronomicalDusk}</td>
            <td>${day.dayLength}</td>
        `;

        tbody.appendChild(row);
    });
}

function renderTodaysTimes() {
    const todayData = getTodayData();
    if (!todayData) return;

    const timesGrid = document.getElementById('timesGrid');
    timesGrid.innerHTML = '';

    const times = [
        { label: 'Astronomical Dawn', time: todayData.astronomicalDawn, key: 'astronomicalDawn' },
        { label: 'Civil Dawn', time: todayData.civilDawn, key: 'civilDawn' },
        { label: 'Sunrise', time: todayData.sunrise, key: 'sunrise' },
        { label: 'Golden Hour End', time: todayData.goldenHourMorningEnd, key: 'goldenHourMorning' },
        { label: 'Solar Noon', time: todayData.solarNoon, key: 'solarNoon' },
        { label: 'Golden Hour Start', time: todayData.goldenHourEveningStart, key: 'goldenHourEvening' },
        { label: 'Sunset', time: todayData.sunset, key: 'sunset' },
        { label: 'Civil Dusk', time: todayData.civilDusk, key: 'civilDusk' },
        { label: 'Astronomical Dusk', time: todayData.astronomicalDusk, key: 'astronomicalDusk' }
    ];

    times.forEach(item => {
        const card = document.createElement('div');
        card.className = 'time-card';

        const description = SOLAR_TIME_DESCRIPTIONS[item.key] || '';

        card.innerHTML = `
            <h3>${item.label}</h3>
            <div class="time">${item.time}</div>
            <div class="description">${description.substring(0, 100)}...</div>
        `;

        timesGrid.appendChild(card);
    });
}

function renderRecommendations() {
    const grid = document.getElementById('recommendationsGrid');
    grid.innerHTML = '';

    Object.entries(SOLAR_PHASE_RECOMMENDATIONS).forEach(([key, rec]) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';

        const activitiesList = rec.activities.map(a => `<li>${a}</li>`).join('');
        const avoidList = rec.avoid.map(a => `<li>${a}</li>`).join('');

        card.innerHTML = `
            <h3>${rec.phase}</h3>
            <div class="energy-level">Energy: ${rec.energy}</div>
            <div>
                <strong>Best for:</strong>
                <ul>${activitiesList}</ul>
            </div>
            <div>
                <strong>Avoid:</strong>
                <ul class="avoid-list">${avoidList}</ul>
            </div>
        `;

        grid.appendChild(card);
    });
}

function renderSchedule() {
    const scheduleList = document.getElementById('scheduleList');

    if (userSchedule.length === 0) {
        scheduleList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No activities scheduled yet. Add your first activity above!</p>';
        return;
    }

    scheduleList.innerHTML = '';

    // Sort schedule by time
    const sorted = [...userSchedule].sort((a, b) => {
        return a.time.localeCompare(b.time);
    });

    sorted.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';

        scheduleItem.innerHTML = `
            <div class="schedule-item-content">
                <h4>${item.name}</h4>
                <p>${item.time} • ${item.duration} min ${item.description ? '• ' + item.description : ''}</p>
            </div>
            <div class="schedule-item-actions">
                <button onclick="deleteActivity(${item.id})" title="Delete">×</button>
            </div>
        `;

        scheduleList.appendChild(scheduleItem);
    });
}

function addActivity() {
    const name = document.getElementById('activityName').value.trim();
    const timing = document.getElementById('activityTiming').value;
    const customTime = document.getElementById('activityTime').value;
    const duration = parseInt(document.getElementById('activityDuration').value);

    if (!name) {
        alert('Please enter an activity name');
        return;
    }

    if (timing === 'custom' && !customTime) {
        alert('Please select a time');
        return;
    }

    const todayData = getTodayData();
    if (!todayData) return;

    let activityTime = customTime;
    let description = '';

    // Calculate time based on solar timing
    if (timing !== 'custom') {
        const timingMap = {
            'sunrise-before': { base: todayData.sunrise, offset: -60, desc: '1 hour before sunrise' },
            'sunrise-after': { base: todayData.sunrise, offset: 60, desc: '1 hour after sunrise' },
            'morning': { base: todayData.sunrise, offset: 120, desc: 'Morning phase' },
            'noon-before': { base: todayData.solarNoon, offset: -15, desc: 'Before solar noon' },
            'noon-after': { base: todayData.solarNoon, offset: 15, desc: 'After solar noon' },
            'afternoon': { base: todayData.sunset, offset: -120, desc: 'Afternoon phase' },
            'sunset-before': { base: todayData.sunset, offset: -60, desc: '1 hour before sunset' },
            'sunset-after': { base: todayData.sunset, offset: 60, desc: '1 hour after sunset' }
        };

        const config = timingMap[timing];
        if (config) {
            activityTime = addMinutesToTime(config.base, config.offset);
            description = config.desc;
        }
    }

    const newActivity = {
        id: Date.now(),
        name,
        timing,
        time: activityTime,
        duration,
        description
    };

    userSchedule.push(newActivity);
    renderSchedule();

    // Clear form
    document.getElementById('activityName').value = '';
    document.getElementById('activityDuration').value = '60';
}

function deleteActivity(id) {
    userSchedule = userSchedule.filter(item => item.id !== id);
    renderSchedule();
}

function updateSunArc() {
    const todayData = getTodayData();
    if (!todayData) return;

    // This is a simplified representation
    // In a full implementation, this would calculate the actual sun path

    const svg = document.getElementById('sunArcSvg');
    const path = document.getElementById('sunPath');
    const sunPosition = document.getElementById('sunPosition');

    // Create arc path (simplified)
    const arcPath = 'M 100 250 Q 400 50 700 250';
    path.setAttribute('d', arcPath);

    // Position sun based on current time
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const sunrise = timeToMinutes(todayData.sunrise);
    const sunset = timeToMinutes(todayData.sunset);
    const current = timeToMinutes(currentTime);

    let sunX = 400; // Default to center
    let sunY = 150;

    if (current >= sunrise && current <= sunset) {
        const progress = (current - sunrise) / (sunset - sunrise);
        sunX = 100 + (progress * 600);
        sunY = 250 - (Math.sin(progress * Math.PI) * 200);
    }

    sunPosition.setAttribute('cx', sunX);
    sunPosition.setAttribute('cy', sunY);
}

// Utility functions
function getTodayData() {
    return SAMPLE_SOLAR_DATA.find(day => day.date === currentDate) || SAMPLE_SOLAR_DATA[0];
}

function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

function addMinutesToTime(timeStr, minutesToAdd) {
    const totalMinutes = timeToMinutes(timeStr) + minutesToAdd;
    return minutesToTime(totalMinutes);
}

function updateViews() {
    renderCalendar();
    renderTodaysTimes();
    renderSchedule();
    updateSunArc();
}

// Make deleteActivity available globally
window.deleteActivity = deleteActivity;

console.log('Sun Signal app.js loaded');
