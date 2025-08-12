import './App.css';

function MoodTracker(props) {
  return (
    <div className={`mood ${props.mood}`}>
      <span>{props.emoji} {props.mood} (Logged at: {props.timestamp})</span>
    </div>
  );
}

export default MoodTracker;