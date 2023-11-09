import React from 'react';

function Main({ children }: any) {
    return (
        <div style={{
            backgroundImage: "url('./assets/images/splash.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100%",
            height: 800,
            backgroundSize: "cover"
          }}> {children}
        </div>
    );
  }
  
  export default Main;