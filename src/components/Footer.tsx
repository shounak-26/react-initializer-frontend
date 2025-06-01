import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} React Intializer. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm">For queries, contact us at </span>
            <a
              href="mailto:techbuzzzsoln@gmail.com"
              className="text-sm text-blue-400 hover:text-blue-300 underline"
            >
              techbuzzzsoln@gmail.com
            </a>
            <a
              href="https://github.com/shounak-26/react-initializer-frontend"
              className="text-sm text-blue-400 hover:text-blue-300 underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;