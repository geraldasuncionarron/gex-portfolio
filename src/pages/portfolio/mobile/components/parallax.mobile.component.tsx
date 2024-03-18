import React from 'react';
import NavbarHeader from './navbar.mobile.component';

function Parallax({ children }: any) {
    return (
      <div className="parallax-container">
        <div className='parallax-bg' style={{
          backgroundImage: "url('./assets/images/dark.jpg')"
        }}/>
        <div className='content'>
          {children}
        </div>
      </div>
    );
  }
  
  export default Parallax;