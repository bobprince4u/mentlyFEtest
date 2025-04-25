import { ReactNode } from 'react';

export default function AccessibilityWrapper({ children }: { children: ReactNode }) {
    return (
      <div role="application" aria-label="Techrity Dashboard">
        {children}
      </div>
    );
  }