import React from 'react';

/**
 * BAD BUTTON COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */
export function BadButton({ onClick }: { onClick: () => void }) {
  // VIOLATION: 2.1.1 - onClick without keyboard handler
  // VIOLATION: 4.1.2 - No role, tabindex, or keyboard accessibility
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      Click me
    </div>
  );
}

/**
 * BAD BUTTON VARIANT - Missing focus indicator
 */
export function BadButtonNoFocus({ label }: { label: string }) {
  // VIOLATION: 2.4.7 - Focus not visible
  // VIOLATION: 1.4.11 - No visible focus indicator
  return (
    <button
      onClick={() => console.log('clicked')}
      style={{ outline: 'none' }}
    >
      {label}
    </button>
  );
}

/**
 * ICON BUTTON - Missing accessible name
 */
export function IconButton({ onClick }: { onClick: () => void }) {
  // VIOLATION: 4.1.2 - No accessible name for icon button
  // VIOLATION: 2.4.4 - Link/button purpose unclear
  return (
    <button onClick={onClick}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
      </svg>
    </button>
  );
}