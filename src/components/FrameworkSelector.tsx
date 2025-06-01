
interface FrameworkSelectorProps {
  framework: string;
  setFramework: (framework: string) => void;
}

const frameworks = ["vite", "create-react-app", "next", "remix"];

const FrameworkSelector: React.FC<FrameworkSelectorProps> = ({ framework, setFramework }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-300">Project</h3>
      <div className="flex space-x-4 mt-2">
        {frameworks.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name="framework"
              value={option}
              checked={framework === option}
              onChange={() => setFramework(option)}
              className={`mr-2 ${framework === option ? "accent-purple-600" : ""}`}
            />
            <span className="text-gray-300">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FrameworkSelector;