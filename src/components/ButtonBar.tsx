import { toast } from "react-toastify";
import axios from "axios";

interface ButtonBarProps {
  formData: any;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ formData }) => {
  const handleGenerate = async () => {
    try {
      const response = await axios.post("http://localhost:3000/generate-project", formData, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${formData.projectName}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success("Project generated successfully!");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred.";
      toast.error(`Failed to generate project: ${errorMessage}`);
    }
  };

  const handleExplore = () => {
    toast.info("Explore functionality not implemented yet.");
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleGenerate}
        className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 hover:bg-gray-700"
      >
        GENERATE Ctrl + ⏎
      </button>
      <button
        onClick={handleExplore}
        className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 hover:bg-gray-700"
      >
        EXPLORE Ctrl + Space
      </button>
    </div>
  );
};

export default ButtonBar;