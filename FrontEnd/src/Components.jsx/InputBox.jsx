export const InputBox = ({ title, placeholder, onChange, className = "" }) => {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="block text-sm font-medium text-gray-700">{title}</label>
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};
