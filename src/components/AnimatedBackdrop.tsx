import React from 'react';

const AnimatedBackdrop = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="gif-gradient absolute inset-0 opacity-80" />
      <div className="gif-scan absolute inset-0 opacity-35" />

      <div className="scene-3d absolute right-4 top-24 hidden h-72 w-72 md:block lg:right-10 lg:top-28">
        <div className="orbital-system">
          <div className="neural-core" />
          <span className="orbit orbit-a"><i /></span>
          <span className="orbit orbit-b"><i /></span>
          <span className="orbit orbit-c"><i /></span>
          <span className="node node-a" />
          <span className="node node-b" />
          <span className="node node-c" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackdrop;
