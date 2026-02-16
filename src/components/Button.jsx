export default function Button({ children, onClick, type = "button", className = "" }) {
  const baseStyles = "font-bold px-4 py-2 rounded-lg transition";
  const defaultStyles = className ? "" : "bg-purple-600 text-white hover:bg-purple-800";
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${defaultStyles} ${className}`}
    >
      {children}
    </button>
  );
}
