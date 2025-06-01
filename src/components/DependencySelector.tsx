import Select from "react-select";
import { toast } from "react-toastify";

interface DependencySelectorProps {
  dependencies: { name: string; version: string }[];
  setDependencies: (dependencies: { name: string; version: string }[]) => void;
}

const availableDependencies = [
  { value: "react-router-dom", label: "React Router DOM" },
  { value: "axios", label: "Axios" },
  { value: "redux", label: "Redux" },
  { value: "zustand", label: "Zustand" },
  { value: "react-modal", label: "React Modal" },
  { value: "recharts", label: "Recharts" },
  { value: "react-toastify", label: "React Toastify" },
  { value: "jest", label: "Jest" },
  { value: "@testing-library/react", label: "Testing Library React" },
  { value: "@mui/material", label: "Material-UI" },
  { value: "styled-components", label: "Styled Components" },
  { value: "@tanstack/react-query", label: "React Query" },
  { value: "framer-motion", label: "Framer Motion" },
  { value: "react-i18next", label: "React i18next" },
  { value: "react-dropzone", label: "React Dropzone" },
  { value: "chart.js", label: "Chart.js" },
  { value: "react-chartjs-2", label: "React Chartjs 2" },
  { value: "@apollo/client", label: "Apollo Client" },
  { value: "antd", label: "Ant Design" },
  { value: "@chakra-ui/react", label: "@Chakra UI" },
];

const DependencySelector: React.FC<DependencySelectorProps> = ({ dependencies, setDependencies }) => {
  const handleAddDependency = (selectedOption: any) => {
    if (selectedOption) {
      const depName = selectedOption.value;
      if (dependencies.some((dep) => dep.name === depName)) {
        toast.error(`Dependency ${depName} is already added.`);
        return;
      }
      setDependencies([...dependencies, { name: depName, version: "latest" }]);
    }
  };

  const handleRemoveDependency = (index: number) => {
    setDependencies(dependencies.filter((_, i) => i !== index));
  };

  const handleClearDependencies = () => {
    setDependencies([]);
    toast.success("All dependencies cleared.");
  };

  const handleSelectAll = () => {
    const allDeps = availableDependencies.map((dep) => ({ name: dep.value, version: "latest" }));
    const uniqueDeps = allDeps.filter((dep) => !dependencies.some((d) => d.name === dep.name));
    setDependencies([...dependencies, ...uniqueDeps]);
    toast.success("All dependencies selected.");
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-300">Dependencies ({dependencies.length} selected)</h3>
      <div className="flex space-x-2 mt-2">
        <Select
          options={availableDependencies}
          onChange={handleAddDependency}
          placeholder="Add dependencies... Ctrl + B"
          className="text-black w-full"
          classNamePrefix="select"
          styles={{
            control: (base) => ({ ...base, backgroundColor: "#1f2937" }),
            menu: (base) => ({ ...base, backgroundColor: "#1f2937", color: "#d1d5db" }),
            option: (base, { isFocused }) => ({
              ...base,
              backgroundColor: isFocused ? "#4b5563" : "#1f2937",
              color: "#d1d5db",
            }),
            singleValue: (base) => ({ ...base, color: "#d1d5db" }),
          }}
        />
        <button
          onClick={handleClearDependencies}
          className="bg-gray-800 text-white px-2 py-1 rounded border border-gray-600 hover:bg-gray-700"
        >
          Clear
        </button>
        <button
          onClick={handleSelectAll}
          className="bg-gray-800 text-white px-2 py-1 rounded border border-gray-600 hover:bg-gray-700"
        >
          Select All
        </button>
      </div>
      <div className="mt-2">
        {dependencies.length === 0 ? (
          <p className="text-gray-400">No dependency selected</p>
        ) : (
          <ul>
            {dependencies.map((dep, index) => (
              <li key={index} className="text-gray-300 flex justify-between">
                <span>{dep.name}@{dep.version}</span>
                <button
                  onClick={() => handleRemoveDependency(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DependencySelector;