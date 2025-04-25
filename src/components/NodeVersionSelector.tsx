import { useState } from "react";

interface NodeVersionSelectorProps {
  nodeVersion: string;
  setNodeVersion: (version: string) => void;
}

const nodeVersions = ["20", "18", "16"];

const NodeVersionSelector: React.FC<NodeVersionSelectorProps> = ({ nodeVersion, setNodeVersion }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-300">Node.js Version</h3>
      <div className="flex space-x-4 mt-2">
        {nodeVersions.map((version) => (
          <label key={version} className="flex items-center">
            <input
              type="radio"
              name="nodeVersion"
              value={version}
              checked={nodeVersion === version}
              onChange={() => setNodeVersion(version)}
              className={`mr-2 ${nodeVersion === version ? "accent-purple-600" : ""}`}
            />
            <span className="text-gray-300">{version}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default NodeVersionSelector;