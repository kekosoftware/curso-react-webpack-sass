import React from 'react';

const Header = ({title}) => {
  return (  
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">Rick {title}</h1>
          <p className="text">This is a demo</p>
        </div>
      </div>
    </header>
  );
}
 
export default Header;