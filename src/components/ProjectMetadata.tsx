
import { toast } from "react-toastify";

interface ProjectMetadataProps {
  projectName: string;
  setProjectName: (name: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  license: string;
  setLicense: (license: string) => void;
  version: string;
  setVersion: (version: string) => void;
}

const ProjectMetadata: React.FC<ProjectMetadataProps> = ({
  projectName,
  setProjectName,
  description,
  setDescription,
  author,
  setAuthor,
  license,
  setLicense,
  version,
  setVersion,
}) => {
  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[a-z0-9-]+$/.test(value);
    
    if (value && !isValid) {
      toast.error("Project name must be lowercase, alphanumeric, and can only include hyphens.");
      return;
    }
    setProjectName(value);
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-300">Project Metadata</h3>
      <div className="mt-2 space-y-2">
        <div>
          <label className="block text-gray-300">Name</label>
          <input
            type="text"
            value={projectName}
            onChange={handleProjectNameChange}
            className="w-full bg-gray-700 text-gray-300 p-2 rounded"
            placeholder="demo"
          />
        </div>
        <div>
          <label className="block text-gray-300">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-700 text-gray-300 p-2 rounded"
            placeholder="Demo project for React"
          />
        </div>
        <div>
          <label className="block text-gray-300">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full bg-gray-700 text-gray-300 p-2 rounded"
            placeholder="com.example"
          />
        </div>
        <div>
          <label className="block text-gray-300">License</label>
          <input
            type="text"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            className="w-full bg-gray-700 text-gray-300 p-2 rounded"
            placeholder="MIT"
          />
        </div>
        <div>
          <label className="block text-gray-300">Version</label>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="w-full bg-gray-700 text-gray-300 p-2 rounded"
            placeholder="1.0.0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectMetadata;