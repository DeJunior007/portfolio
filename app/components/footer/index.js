import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#271300] dark:bg-primary-light text-white dark:text-primary-dark py-4">
      <div className="container mx-auto text-center">
        <a
          href="https://www.linkedin.com/in/deilton-pedro"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; {new Date().getFullYear()} Deilton Pedro Junior. All rights
          reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
