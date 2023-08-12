// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your background video */}
      <video id="video-background" autoPlay loop muted>
        <source src="output.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Your other layout elements */}
      {/* For example, navigation bar, footer, etc. */}

      {/* Render the child components (pages) */}
      {children}
    </div>
  );
};
