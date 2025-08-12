import './App.css';

function MoodTracker(props) {
  return (
    <div className={`mood ${props.mood}`}>
      <span>{props.emoji} {props.mood} (Logged at: {props.timestamp})</span>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default MoodTracker;