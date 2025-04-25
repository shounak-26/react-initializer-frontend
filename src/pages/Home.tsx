import { useState } from "react";
import FrameworkSelector from "../components/FrameworkSelector";
import LanguageSelector from "../components/LanguageSelector";
import DependencySelector from "../components/DependencySelector";
import ReactVersionSelector from "../components/SpringBootVersionSelector";
import ProjectMetadata from "../components/ProjectMetadata";
import PackagingSelector from "../components/PackagingSelector";
import NodeVersionSelector from "../components/NodeVersionSelector";
import ButtonBar from "../components/ButtonBar";
import ToastContainerWrapper from "../components/ToastContainerWrapper";

const Home: React.FC = () => {
  const [framework, setFramework] = useState("vite");
  const [language, setLanguage] = useState("typescript");
  const [dependencies, setDependencies] = useState<{ name: string; version: string }[]>([]);
  const [reactVersion, setReactVersion] = useState("18.3.1");
  const [projectName, setProjectName] = useState("demo");
  const [description, setDescription] = useState("Demo project for React");
  const [author, setAuthor] = useState("");
  const [license, setLicense] = useState("MIT");
  const [version, setVersion] = useState("1.0.0");
  const [packaging, setPackaging] = useState("development");
  const [nodeVersion, setNodeVersion] = useState("20");

  const formData = {
    framework,
    language,
    dependencies,
    projectName,
    description,
    version,
    author,
    license,
    folders: ["components", "pages"],
    includeSampleComponent: true,
    includeGit: true,
    includeHusky: false,
    styling: { framework: "tailwindcss", preprocessor: "css", reset: true },
    includeEnv: true,
    includePwa: false,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 p-4 text-center relative">
        <div className="flex items-center justify-center">
          <img src="/assets/react.svg" alt="React Logo" className="w-8 h-8 mr-2 text-purple-400" />
          <h1 className="text-xl font-bold text-white">React Initializer</h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex p-6">
        {/* Left Panel */}
        <div className="w-1/2 pr-6">
          <FrameworkSelector framework={framework} setFramework={setFramework} />
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <ReactVersionSelector reactVersion={reactVersion} setReactVersion={setReactVersion} />
          <ProjectMetadata
            projectName={projectName}
            setProjectName={setProjectName}
            description={description}
            setDescription={setDescription}
            author={author}
            setAuthor={setAuthor}
            license={license}
            setLicense={setLicense}
            version={version}
            setVersion={setVersion}
          />
          <PackagingSelector packaging={packaging} setPackaging={setPackaging} />
          <NodeVersionSelector nodeVersion={nodeVersion} setNodeVersion={setNodeVersion} />
        </div>

        {/* Right Panel */}
        <div className="w-1/2 pl-6">
          <DependencySelector dependencies={dependencies} setDependencies={setDependencies} />
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainerWrapper />

      {/* Bottom Button Bar */}
      <div className="p-6 flex justify-center">
        <ButtonBar formData={formData} />
      </div>
    </div>
  );
};

export default Home;