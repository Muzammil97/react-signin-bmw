import React from 'react';
// import './PageLayout.css';


const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      {children}
    </div>
  );
};

export default PageLayout;