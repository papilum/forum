import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Forum. All rights reserved.</p>
        <p>Designed and developed by PAP</p>
      </div>
    </footer>
  );
};

export default Footer;
