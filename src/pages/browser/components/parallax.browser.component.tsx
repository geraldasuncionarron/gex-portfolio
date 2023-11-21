import React from 'react';

function Parallax({ children }: any) {
    return (
        <div style={{
            backgroundImage: "url('./assets/images/dark.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100%",
            height: 800,
            backgroundSize: "cover"
          }}> {children}
        </div>
    );
  }
  
  export default Parallax;