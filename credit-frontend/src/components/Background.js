// src/components/Background.js
import React, { useEffect } from 'react';

function Background() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.20/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <spline-viewer
        url="https://prod.spline.design/v8ZWU5GLh83JmQ9g/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      ></spline-viewer>
    </div>
  );
}

export default Background;
