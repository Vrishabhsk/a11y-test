import { useState } from 'react';

export function BadAccessibility() {
  const [email, setEmail] = useState('');

  return (
    <div>
      {/* Image without alt text */}
      <img src="/logo.png" width="100" height="50" />

      {/* Button without accessible name */}
      <button onClick={() => console.log('clicked')}>
        <span className="icon">✕</span>
      </button>

      {/* Link without href */}
      <a>Click here</a>

      {/* Form input without label */}
      <input 
        type="text" 
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Another input without label */}
      <input type="password" />

      {/* Div with click handler (not keyboard accessible) */}
      <div onClick={() => alert('clicked')} className="clickable-div">
        Click me
      </div>

      {/* Low contrast text */}
      <p style={{ color: '#eeeeee', backgroundColor: '#ffffff' }}>
        This text has very low contrast
      </p>

      {/* Missing form label association */}
      <label>Username</label>
      <input type="text" />

      {/* Empty button */}
      <button></button>

      {/* Link that opens in new tab without warning */}
      <a href="https://example.com" target="_blank">
        Open in new tab
      </a>

      {/* Table without proper headers */}
      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
        <tr>
          <td>John</td>
          <td>30</td>
        </tr>
      </table>

      {/* Interactive element with no focus indicator */}
      <span 
        role="button" 
        tabIndex={0}
        onClick={() => console.log('span clicked')}
        style={{ outline: 'none' }}
      >
        Clickable span
      </span>
    </div>
  );
}
