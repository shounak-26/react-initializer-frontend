import { useState } from "react";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

const languages = ["javascript", "typescript"];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-300">Language</h3>
      <div className="flex space-x-4 mt-2">
        {languages.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name="language"
              value={option}
              checked={language === option}
              onChange={() => setLanguage(option)}
              className={`mr-2 ${language === option ? "accent-purple-600" : ""}`}
            />
            <span className="text-gray-300">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;