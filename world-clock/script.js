function updateClock(card) {
  const timezone = card.dataset.timezone;
  const now = new Date();
  
  const options = {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  
  const dateOptions = {
    timeZone: timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
  const dateString = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
  
  card.querySelector('.digital-time').textContent = timeString;
  card.querySelector('.date').textContent = dateString;
  
  const timeParts = timeString.split(':');
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const seconds = parseInt(timeParts[2]);
  
  const hourHand = card.querySelector('.hour-hand');
  const minuteHand = card.querySelector('.minute-hand');
  const secondHand = card.querySelector('.second-hand');
  
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;
  
  secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

function updateAllClocks() {
  const cards = document.querySelectorAll('.clock-card');
  cards.forEach(card => updateClock(card));
}

const displayModeSelect = document.getElementById('displayMode');

displayModeSelect.addEventListener('change', (e) => {
  const mode = e.target.value;
  const cards = document.querySelectorAll('.clock-card');
  
  cards.forEach(card => {
    card.classList.remove('digital-only', 'analog-only');
    
    if (mode === 'digital') {
      card.classList.add('digital-only');
    } else if (mode === 'analog') {
      card.classList.add('analog-only');
    }
  });
});

updateAllClocks();
setInterval(updateAllClocks, 1000);
