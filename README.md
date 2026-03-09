# 🌍 World Clock

A beautiful, responsive world clock application showing time across different timezones with both digital and analog displays.

![World Clock Preview](preview.png)

## ✨ Features

- **6 Major Cities**: Hanoi, Yangon, Seoul, Tokyo, Singapore, Kuala Lumpur
- **Real-time Updates**: Clocks update every second
- **Analog & Digital Display**: Both clock types with smooth animations
- **Display Modes**: 
  - Both (Digital + Analog)
  - Digital Only
  - Analog Only
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Beautiful UI**: Modern gradient background with smooth animations

## 🚀 Demo

[Live Demo](https://your-username.github.io/world-clock)

## 📸 Screenshots

### Both Mode
Shows both digital time and analog clock for each timezone.

### Digital Only Mode
Clean digital time display without analog clocks.

### Analog Only Mode
Traditional analog clocks for a classic look.

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Intl.DateTimeFormat API for timezone handling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/world-clock.git
```

2. Navigate to the project directory:
```bash
cd world-clock
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 🎯 How It Works

### Timezone Handling
The app uses JavaScript's `Intl.DateTimeFormat` API to handle different timezones:

```javascript
const options = {
  timeZone: 'Asia/Tokyo',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};
const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
```

### Analog Clock Animation
Clock hands rotate based on current time:

```javascript
const secondDegrees = (seconds / 60) * 360;
const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;
```

### Display Mode Switching
Users can toggle between different display modes using the dropdown:

```javascript
displayModeSelect.addEventListener('change', (e) => {
  const mode = e.target.value;
  // Apply corresponding CSS classes
});
```

## 🎨 Customization

### Adding New Cities

1. Add a new clock card in `index.html`:
```html
<div class="clock-card" data-timezone="America/New_York">
  <div class="city-name">
    <span class="flag">🇺🇸</span>
    <span class="city">New York, USA</span>
  </div>
  <!-- Rest of the clock structure -->
</div>
```

2. The JavaScript will automatically handle the new timezone!

### Changing Colors

Edit the CSS variables or gradient in `styles.css`:

```css
body {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Timezone List

Available timezones (IANA timezone database):
- `Asia/Ho_Chi_Minh` - Hanoi, Vietnam
- `Asia/Yangon` - Yangon, Myanmar
- `Asia/Seoul` - Seoul, Korea
- `Asia/Tokyo` - Tokyo, Japan
- `Asia/Singapore` - Singapore
- `Asia/Kuala_Lumpur` - Kuala Lumpur, Malaysia

[Full timezone list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Features Breakdown

### Digital Clock
- 24-hour format
- Tabular numbers for consistent width
- Updates every second

### Analog Clock
- Hour, minute, and second hands
- Smooth rotation animations
- Red second hand for visibility
- Clock face with numbers (12, 3, 6, 9)

### Display Modes
1. **Both**: Shows digital time + analog clock
2. **Digital Only**: Hides analog clocks
3. **Analog Only**: Hides digital time and date

## 🐛 Known Issues

None at the moment! Feel free to report issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Trần Quang Hiếu**

- GitHub: [@bobibotumtim](https://github.com/bobibotumtim)
- LinkedIn: [Hiếu Quang](https://www.linkedin.com/in/hiếu-quang-07412a314/)
- Email: quanghieuna2005@gmail.com

## 🙏 Acknowledgments

- Inspired by modern world clock applications
- Flag emojis from Unicode
- Timezone data from IANA Time Zone Database

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔮 Future Enhancements

- [ ] Add more cities
- [ ] Search functionality
- [ ] Save favorite cities
- [ ] Dark/Light theme toggle
- [ ] 12/24 hour format toggle
- [ ] Alarm functionality
- [ ] Time zone converter

---

**Made with ❤️ by Trần Quang Hiếu**

⭐ Star this repo if you like it!
