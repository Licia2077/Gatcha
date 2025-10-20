export function Button({ children, className = "", onClick, variant = "primary", size = "md" }) {
    const base =
        "rounded-lg transition-all active:scale-95 font-semibold focus:outline-none";
    const variants = {
        primary: "bg-pink-600 hover:bg-pink-700 text-white",
        secondary: "bg-gray-700 hover:bg-gray-800 text-white",
        ghost: "bg-transparent hover:bg-white/10 text-white",
    };
    const sizes = {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-3 py-2",
        lg: "text-base px-4 py-3",
    };
    return (
        <button
            onClick={onClick}
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
}