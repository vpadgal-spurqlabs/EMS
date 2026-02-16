export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 font-bold text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
    >
      {children}
    </button>
  );
}
