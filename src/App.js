import { useState, useEffect } from 'react';
import MoodTracker from './MoodTracker';
import './App.css';

function App() {
  const [moods, setMoods] = useState([]);
  const [theme, setTheme] = useState('light');

  const logMood = (mood, emoji) => {
    setMoods([
      ...moods,
      { id: `mood-${moods.length + 1}`, mood, emoji, timestamp: new Date().toLocaleTimeString() }
    ]);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    console.log('Moods updated:', moods);
  }, [moods]);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Mood Tracker</h1>
      <button onClick={() => logMood('Happy', '😊')}>Happy</button>
      <button onClick={() => logMood('Sad', '😢')}>Sad</button>
      <button onClick={() => logMood('Excited', '🎉')}>Excited</button>
      <button onClick={toggleTheme}>Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
      <div className="mood-list">
        {moods.map((mood) => (
          <MoodTracker
            key={mood.id}
            mood={mood.mood}
            emoji={mood.emoji}
            timestamp={mood.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default App;