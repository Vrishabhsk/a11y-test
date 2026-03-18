import React, { useState } from 'react';

/**
 * BAD LIVE REGION COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */
export function BadLiveRegion() {
  const [message, setMessage] = useState('');

  const showNotification = () => {
    // VIOLATION: 4.1.3 - Status message not announced to screen readers
    // VIOLATION: 4.1.2 - No aria-live region for dynamic content
    setMessage('Operation completed successfully!');
    
    // Message disappears after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
      
      {/* VIOLATION: 4.1.3 - Dynamic content not in aria-live region */}
      {message && (
        <div style={{ padding: '10px', background: '#d4edda', marginTop: '10px' }}>
          {message}
        </div>
      )}
    </div>
  );
}

/**
 * BAD ALERT - Missing ARIA alert role
 */
export function BadAlert({ type, message }: { type: 'error' | 'warning' | 'success'; message: string }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const colors = {
    error: '#f8d7da',
    warning: '#fff3cd',
    success: '#d4edda'
  };

  return (
    <div>
      {/* VIOLATION: 4.1.2 - Alert not marked with role="alert" */}
      {/* VIOLATION: 4.1.2 - No aria-label to describe alert type */}
      <div style={{ padding: '15px', background: colors[type], marginBottom: '10px' }}>
        {message}
        <button onClick={() => setVisible(false)} style={{ marginLeft: '10px' }}>×</button>
      </div>
    </div>
  );
}

/**
 * BAD PROGRESS - Missing ARIA progress attributes
 */
export function BadProgress({ value, max }: { value: number; max: number }) {
  const percentage = (value / max) * 100;

  return (
    <div>
      {/* VIOLATION: 4.1.2 - Progress not marked with role="progressbar" */}
      {/* VIOLATION: 4.1.2 - Missing aria-valuenow, aria-valuemin, aria-valuemax */}
      <div style={{ width: '100%', background: '#e0e0e0', height: '20px' }}>
        <div 
          style={{ width: `${percentage}%`, background: '#4caf50', height: '100%' }}
        />
      </div>
      <span>{percentage}%</span>
    </div>
  );
}

/**
 * BAD LOADING SPINNER - Missing accessible name
 */
export function BadLoadingSpinner() {
  return (
    <div>
      {/* VIOLATION: 4.1.2 - Loading state not announced to screen readers */}
      {/* VIOLATION: 1.1.1 - No text alternative for loading indicator */}
      <div 
        style={{ 
          width: '40px', 
          height: '40px', 
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} 
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/**
 * BAD DYNAMIC LIST - Missing ARIA for added/removed items
 */
export function BadDynamicList() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      // VIOLATION: 4.1.2 - New items not announced to screen readers
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    // VIOLATION: 4.1.2 - Removed items not announced to screen readers
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New item"
        />
        <button onClick={addItem}>Add</button>
      </div>
      
      {/* VIOLATION: 4.1.2 - List updates not announced */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * BAD SEARCH RESULTS - Missing status announcement
 */
export function BadSearchResults({ query, results }: { query: string; results: string[] }) {
  return (
    <div>
      {/* VIOLATION: 4.1.3 - Search results count not announced */}
      {/* VIOLATION: 4.1.2 - No aria-live for search results */}
      <div>
        <p>Found {results.length} results for "{query}"</p>
      </div>
      
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
      
      {/* VIOLATION: 4.1.3 - No results message not announced */}
      {results.length === 0 && (
        <p>No results found. Try a different search term.</p>
      )}
    </div>
  );
}
