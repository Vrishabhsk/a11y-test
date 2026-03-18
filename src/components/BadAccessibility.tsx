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

      {/* Empty alt attribute for informative image */}
      <img src="/user-avatar.jpg" alt="" />

      {/* Select without label */}
      <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>

      {/* Checkbox without label */}
      <input type="checkbox" />

      {/* Radio buttons without fieldset and legend */}
      <div>
        <input type="radio" name="group" id="r1" />
        <label htmlFor="r1">Option A</label>
        <input type="radio" name="group" id="r2" />
        <label htmlFor="r2">Option B</label>
      </div>

      {/* Textarea without label */}
      <textarea placeholder="Enter your message" />

      {/* Video without captions */}
      <video width="320" height="240" controls>
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Audio without transcript */}
      <audio controls>
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>

      {/* Heading structure out of order */}
      <h1>Main Title</h1>
      <h3>Skip H2</h3>
      <h4>H4 without parent H3</h4>

      {/* Empty heading */}
      <h2></h2>

      {/* List without proper structure */}
      <div>• Item 1</div>
      <div>• Item 2</div>
      <div>• Item 3</div>

      {/* Link text is not descriptive */}
      <a href="/page">Click here</a>
      <a href="/about">Read more</a>
      <a href="/download">Go</a>

      {/* Multiple links point to same URL with different text */}
      <a href="/services">Our Services</a>
      <a href="/services">Learn More</a>

      {/* Frame without title */}
      <iframe src="/content.html"></iframe>

      {/* Autoplaying content without pause control */}
      <div style={{ animation: 'scroll 5s infinite linear' }}>
        This text scrolls automatically with no way to stop it
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Content that auto-refreshes periodically */}
      <div id="auto-refresh-content">
        Auto-refreshing content without user control
      </div>

      {/* Using color alone to convey information */}
      <div>
        <span style={{ color: 'red', fontSize: '24px' }}>●</span> Error
        <span style={{ color: 'green', fontSize: '24px' }}>●</span> Success
      </div>

      {/* Form field with error but no association */}
      <input type="email" placeholder="Email" />
      <span style={{ color: 'red' }}>Invalid email address</span>

      {/* Button with icon only, no aria-label */}
      <button>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
        </svg>
      </button>

      {/* Auto-playing carousel without pause button */}
      <div style={{ width: '300px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', animation: 'slide 10s infinite linear' }}>
          <div style={{ minWidth: '300px', height: '200px', background: 'red' }}>Slide 1</div>
          <div style={{ minWidth: '300px', height: '200px', background: 'blue' }}>Slide 2</div>
          <div style={{ minWidth: '300px', height: '200px', background: 'green' }}>Slide 3</div>
        </div>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          33% { transform: translateX(-300px); }
          66% { transform: translateX(-600px); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Flashing content (presents seizure risk) */}
      <div style={{ 
        width: '100px', 
        height: '100px', 
        background: 'red',
        animation: 'flash 0.2s infinite'
      }}>
        Warning
      </div>
      <style>{`
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Content with fixed position that can cover other content */}
      <div style={{ 
        position: 'fixed', 
        bottom: '0', 
        right: '0', 
        width: '300px', 
        height: '400px',
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }}>
        Fixed overlay with no close button
      </div>

      {/* Input with placeholder instead of label */}
      <input type="password" placeholder="Password" />

      {/* Multiple elements with same id (violates HTML) */}
      <button id="submit-btn">Submit</button>
      <button id="submit-btn">Submit</button>

      {/* Time-based event without alternative */}
      <div>Content will disappear in 5 seconds automatically</div>

      {/* Skip to main content link that's hidden from screen readers */}
      <a href="#main" style={{ position: 'absolute', left: '-9999px' }}>
        Skip to main content
      </a>

      {/* Progress indicator without ARIA attributes */}
      <div style={{ width: '100%', height: '20px', background: '#e0e0e0' }}>
        <div style={{ width: '50%', height: '100%', background: 'green' }}></div>
      </div>

      {/* Alert that's not announced to screen readers */}
      <div style={{ background: 'yellow', padding: '10px' }}>
        Important update! Please read carefully.
      </div>

      {/* Status message not in live region */}
      <div>Your profile has been saved successfully.</div>

      {/* Tooltip not accessible to keyboard users */}
      <span style={{ textDecoration: 'underline', cursor: 'help' }}>
        Hover for help
      </span>

      {/* Menu items not in proper semantic structure */}
      <div>
        <div onClick={() => console.log('Home')}>Home</div>
        <div onClick={() => console.log('About')}>About</div>
        <div onClick={() => console.log('Contact')}>Contact</div>
      </div>

      {/* Search input without role and ARIA */}
      <input type="text" placeholder="Search" />
      <button>Go</button>

      {/* Content with time limit without extension option */}
      <div>
        Your session will expire in 30 seconds. Log out automatically.
      </div>

      {/* Content that requires mouse hover to access */}
      <div onMouseEnter={() => console.log('entered')}>
        Hover to see content
        <div style={{ display: 'none' }}>
          Hidden content only visible on hover
        </div>
      </div>

      {/* Slider without ARIA attributes */}
      <input type="range" min="0" max="100" />

      {/* Modal overlay without focus trap or ARIA */}
      <div style={{ 
        position: 'fixed', 
        top: '0', 
        left: '0', 
        width: '100%', 
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ background: 'white', padding: '20px', width: '300px' }}>
          <h3>Modal</h3>
          <p>This is a modal dialog</p>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
}
