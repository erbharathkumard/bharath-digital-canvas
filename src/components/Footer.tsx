
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-theme-light-slate">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Designed & Built by Bharath Kumar D | &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
