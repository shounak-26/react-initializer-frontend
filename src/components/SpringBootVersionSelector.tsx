
interface ReactVersionSelectorProps {
  reactVersion: string;
  setReactVersion: (version: string) => void;
}

const reactVersions = ["18.3.1", "19.0.0-beta"];

const ReactVersionSelector: React.FC<ReactVersionSelectorProps> = ({ reactVersion, setReactVersion }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-300">React Version</h3>
      <div className="flex space-x-4 mt-2">
        {reactVersions.map((version) => (
          <label key={version} className="flex items-center">
            <input
              type="radio"
              name="reactVersion"
              value={version}
              checked={reactVersion === version}
              onChange={() => setReactVersion(version)}
              className={`mr-2 ${reactVersion === version ? "accent-purple-600" : ""}`}
            />
            <span className="text-gray-300">{version}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ReactVersionSelector;