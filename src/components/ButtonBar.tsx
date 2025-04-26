import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import Modal, { Styles } from "react-modal"; // Import Styles type
import { ClipLoader } from "react-spinners";

interface ButtonBarProps {
  formData: any;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ formData }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState("Initializing...");

  // Define modalStyle with proper Styles type
  const modalStyle: Styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1a202c",
      color: "#e2e8f0",
      border: "none",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center" as const, // Explicitly type as TextAlign
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);
    setProgressMessage("Initializing...");

    try {
      // Simulate progress updates (replace with real backend streaming if available)
      const simulateProgress = () => {
        const steps = [
          "npx creating Remix app...",
          "Installing dependencies...",
          "Configuring project...",
          "Finalizing setup...",
          "Completing...",
        ];
        let stepIndex = 0;
        const interval = setInterval(() => {
          if (stepIndex < steps.length) {
            setProgressMessage(steps[stepIndex]);
            setProgress(((stepIndex + 1) / steps.length) * 100);
            stepIndex++;
          } else {
            clearInterval(interval);
          }
        }, 1000); // Simulate 1-second steps

        // Stop simulation after 5 seconds
        setTimeout(() => clearInterval(interval), 5000);
      };

      simulateProgress();

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
    } finally {
      setIsGenerating(false);
      setProgress(100);
      setProgressMessage("Done!");
      setTimeout(() => setProgressMessage(""), 1000); // Clear message after 1 second
    }
  };

  const handleExplore = () => {
    toast.info("Explore functionality not implemented yet.");
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Progress Display */}
      {isGenerating && (
        <div className="w-full max-w-md mb-4">
          <p className="text-center text-gray-300 mb-2">{progressMessage}</p>
          <div className="relative w-full h-5 bg-gray-700 rounded">
            <div
              className="absolute top-0 left-0 h-full bg-purple-500 rounded transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-center mt-2">
            <ClipLoader color="#a855f7" loading={isGenerating} size={30} />
          </div>
        </div>
      )}

      {/* Modal for "Please wait" */}
      <Modal
        isOpen={isGenerating}
        onRequestClose={() => {}} // Prevent closing
        style={modalStyle} // Now properly typed
        ariaHideApp={false}
      >
        <h2 className="text-lg font-semibold">Please Wait</h2>
        <p>This process may take some time depending on the libraries selected. Page will not reload.</p>
        <p>Usually takes 5-10min to create whole project with libraries & pages. </p>
      </Modal>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleGenerate}
          className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 hover:bg-gray-700 disabled:opacity-50"
          disabled={isGenerating}
        >
          GENERATE Ctrl + ⏎
        </button>
        <button
          onClick={handleExplore}
          className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 hover:bg-gray-700 disabled:opacity-50"
          disabled={isGenerating}
        >
          EXPLORE Ctrl + Space
        </button>
      </div>
    </div>
  );
};

export default ButtonBar;