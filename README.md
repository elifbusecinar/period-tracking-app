# Döngü - Period Tracking App

A modern, privacy-focused period tracking application built with React and Vite. Features a beautiful glassmorphic UI with both dark and light modes, educational content about menstrual health, and myth-busting information.

## ✨ Features

### 🩸 Cycle Tracking
- **Visual Phase Indicator**: Track your current menstrual cycle phase with beautiful, color-coded cards
- **Cycle Timeline**: Interactive progress bar showing all four phases of your cycle
- **Day Counter**: Keep track of which day you're on in your cycle
- **Phase Information**: Educational descriptions and notes for each phase

### 📊 Daily Logging
- **Mood Tracking**: Log your emotional state
- **Energy Levels**: Track your energy throughout your cycle
- **Pain Monitoring**: Record pain levels
- **Flow Tracking**: Monitor your menstrual flow

### 📚 Educational Content
- **Myth Busters**: Learn the truth about common menstrual health misconceptions
- **Phase-Specific Suggestions**: Get personalized recommendations based on your current cycle phase
- **Health Information**: Important notes about when to consult healthcare professionals

### 🎨 Beautiful UI/UX
- **Glassmorphism Design**: Modern frosted glass effect on all cards
- **Dual Theme Support**: 
  - **Dark Mode**: Deep purple gradient with glowing effects
  - **Light Mode**: Soft peach gradient with semi-transparent cards
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Responsive Design**: Works beautifully on all screen sizes
- **Custom Color Palette**: Carefully curated pink, peach, and purple tones

## 🎨 Color Palette

The app uses a warm, feminine color palette:

- **Peach** (`#FFBB94`) - Ovulation phase
- **Salmon** (`#FB9590`) - Luteal phase
- **Pink** (`#DC586D`) - Menstrual phase
- **Magenta** (`#A33757`) - Follicular phase
- **Purple** (`#852E4E`) - Accent color
- **Dark Purple** (`#4C1D3D`) - Deep accent

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript (ES6+)** - Programming language

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd period-tracking-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📱 App Structure

```
src/
├── App.jsx          # Main application component
├── index.css        # Global styles and Tailwind imports
└── main.jsx         # Application entry point
```

## 🎯 Planned Features

### Data Persistence
- [ ] Local storage integration for saving cycle data
- [ ] Export/import functionality for data backup
- [ ] Cloud sync option (optional)

### Enhanced Tracking
- [ ] Symptom tracking (headaches, cramps, bloating, etc.)
- [ ] Medication reminders
- [ ] Custom notes for each day
- [ ] Photo diary option

### Analytics & Insights
- [ ] Cycle length trends and predictions
- [ ] Pattern recognition for symptoms
- [ ] Fertility window calculator
- [ ] Historical data visualization with charts

### Customization
- [ ] Customizable cycle length
- [ ] Adjustable period duration
- [ ] Theme customization options
- [ ] Language selection (Turkish/English)

### Health Features
- [ ] Birth control tracking
- [ ] Pregnancy mode
- [ ] Menopause tracking
- [ ] Integration with health conditions (PCOS, endometriosis, etc.)

### Social & Community
- [ ] Anonymous community forum
- [ ] Expert Q&A section
- [ ] Shareable insights (privacy-focused)

### Notifications
- [ ] Period predictions and reminders
- [ ] Ovulation alerts
- [ ] Custom reminder system
- [ ] Daily check-in prompts

### Accessibility
- [ ] Screen reader optimization
- [ ] Keyboard navigation
- [ ] High contrast mode
- [ ] Font size adjustment

## 🔒 Privacy

This app is designed with privacy in mind:
- All data is stored locally on your device
- No tracking or analytics
- No account required
- No data sharing with third parties

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Acknowledgments

- Design inspired by modern glassmorphism trends
- Educational content based on medical research
- Built with love for menstrual health awareness

---

**Note**: This app is for educational and tracking purposes only. It is not a substitute for professional medical advice. Always consult with a healthcare provider for medical concerns.
