import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-96B6C5 text-white py-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center h-[200px]">
        <div className="text-center md:text-left">
          <p className="text-xl font-semibold">Контакти</p>
          <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2">
            <a
              href="mailto:your@email.com"
              className="text-white hover:underline"
            >
              blog@gmail.com
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="tel:+1234567890"
              className="text-white hover:underline"
            >
              +43 677 48572910
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Blog platform
        </div>
      </div>
    </footer>
  );
};

export default Footer;
