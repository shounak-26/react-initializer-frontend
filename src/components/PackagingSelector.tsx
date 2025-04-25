import { useState } from "react";

interface PackagingSelectorProps {
  packaging: string;
  setPackaging: (packaging: string) => void;
}

const packagingOptions = ["development", "production"];

const PackagingSelector: React.FC<PackagingSelectorProps> = ({ packaging, setPackaging }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-300">Build Output</h3>
      <div className="flex space-x-4 mt-2">
        {packagingOptions.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name="packaging"
              value={option}
              checked={packaging === option}
              onChange={() => setPackaging(option)}
              className={`mr-2 ${packaging === option ? "accent-purple-600" : ""}`}
            />
            <span className="text-gray-300">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PackagingSelector;