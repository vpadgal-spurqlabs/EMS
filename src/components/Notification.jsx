import { useSelector } from "react-redux";

export default function Notification() {
  const notifications = useSelector(
    (state) => state.notifications.list
  );

  return (
    <div className="fixed top-5 right-5 space-y-2 z-50">
      {notifications.map((note) => (
        <div
          key={note.id}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          {note.message}
        </div>
      ))}
    </div>
  );
}
