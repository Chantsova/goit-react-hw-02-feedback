import './Notification.css';

function Notification({ message }) {
  return (
    <div className="nofeedback">
      <h2 className="nofeedback__title">{message}</h2>
    </div>
  );
}

export default Notification;
