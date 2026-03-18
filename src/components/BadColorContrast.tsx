import React from 'react';

/**
 * BAD COLOR CONTRAST COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */

/**
 * LOW CONTRAST TEXT
 */
export function LowContrastText() {
  // VIOLATION: 1.4.3 - Text contrast below 4.5:1
  // VIOLATION: 1.4.11 - UI component contrast below 3:1
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* VIOLATION: Light gray on white - ~2.5:1 contrast */}
      <p style={{ color: '#cccccc' }}>
        This text is hard to read for many users
      </p>

      {/* VIOLATION: Even lighter - ~1.8:1 contrast */}
      <span style={{ color: '#dddddd' }}>
        Subtle text that's barely visible
      </span>

      {/* VIOLATION: Colored text with low contrast */}
      <p style={{ color: '#ffaaaa' }}>
        Pink text on white background
      </p>
    </div>
  );
}

/**
 * LOW CONTRAST BUTTON
 */
export function LowContrastButton() {
  // VIOLATION: 1.4.11 - Button contrast below 3:1 for UI components
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      {/* VIOLATION: Light button on light background */}
      <button
        style={{
          backgroundColor: '#e0e0e0',
          color: '#999999',
          border: '1px solid #cccccc'
        }}
      >
        Submit
      </button>

      {/* VIOLATION: Disabled-looking button that's actually enabled */}
      <button
        style={{
          backgroundColor: '#f5f5f5',
          color: '#aaaaaa'
        }}
      >
        Click Here
      </button>
    </div>
  );
}

/**
 * LOW CONTRAST LINK
 */
export function LowContrastLink() {
  // VIOLATION: 1.4.3 - Link contrast below 4.5:1
  // VIOLATION: 1.4.11 - Link must have 3:1 contrast to surrounding text
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <p style={{ color: '#333333' }}>
        Normal text with a{' '}
        <a href="/page" style={{ color: '#99aacc' }}>
          low contrast link
        </a>{' '}
        in the middle.
      </p>
    </div>
  );
}

/**
 * PLACEHOLDER TEXT
 */
export function PlaceholderText() {
  // VIOLATION: 1.4.3 - Placeholder text often has insufficient contrast
  // VIOLATION: 3.3.2 - Placeholder should not be the only label
  return (
    <div>
      {/* VIOLATION: Placeholder contrast is typically ~3:1 */}
      <input
        type="text"
        placeholder="Enter your name"
        style={{ color: '#999999' }}
      />

      {/* VIOLATION: Placeholder color explicitly set too light */}
      <input
        type="email"
        placeholder="Email address"
        style={{ '::placeholder': { color: '#cccccc' } }}
      />
    </div>
  );
}

/**
 * DARK BACKGROUND LOW CONTRAST
 */
export function DarkBackground() {
  // VIOLATION: 1.4.3 - Light text on dark must also have 4.5:1 contrast
  return (
    <div style={{ backgroundColor: '#333333' }}>
      {/* VIOLATION: Dark gray on dark background */}
      <p style={{ color: '#555555' }}>
        This text is nearly invisible
      </p>

      {/* VIOLATION: Low contrast colored text */}
      <span style={{ color: '#444466' }}>
        Subtle accent text
      </span>
    </div>
  );
}