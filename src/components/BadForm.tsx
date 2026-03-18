import React, { useState } from 'react';

/**
 * BAD FORM COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */
export function BadForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      // VIOLATION: 3.3.1 - Error not announced to screen readers
      // VIOLATION: 4.1.2 - No aria-live for error message
      setError('Email is required');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* VIOLATION: 3.3.2 - Input has no label */}
      {/* VIOLATION: 1.3.5 - Missing autocomplete attribute */}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {/* VIOLATION: 1.3.1 - Error not associated with input via aria-describedby */}
      {error && <span className="error">{error}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

/**
 * CHECKBOX FORM - Missing fieldset and legend
 */
export function CheckboxForm() {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Related checkboxes not in fieldset with legend */}
      {/* VIOLATION: 4.1.2 - No fieldset for grouped controls */}
      <p>Select your interests:</p>

      <input type="checkbox" id="js" /> <label htmlFor="js">JavaScript</label>
      <input type="checkbox" id="react" /> <label htmlFor="react">React</label>
      <input type="checkbox" id="ts" /> <label htmlFor="ts">TypeScript</label>
    </div>
  );
}

/**
 * SEARCH FORM - Missing form label and ARIA
 */
export function SearchForm() {
  // VIOLATION: 4.1.2 - Search input missing role="search"
  // VIOLATION: 3.3.2 - Input lacks proper labeling
  return (
    <form>
      <input type="text" placeholder="Search..." />
      {/* VIOLATION: 2.4.4 - Button text not descriptive */}
      <button type="submit">Go</button>
    </form>
  );
}