import React, { useState } from 'react';

/**
 * BAD MODAL COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */

export function BadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  // VIOLATION: 2.1.2 - No focus trap in modal
  // VIOLATION: 4.1.2 - No role="dialog" or aria-modal
  // VIOLATION: 2.4.3 - Focus not moved to modal on open
  // VIOLATION: 3.2.1 - Background content not hidden from screen readers

  return (
    <div className="modal-overlay">
      {/* VIOLATION: 4.1.2 - No role="dialog" */}
      {/* VIOLATION: 4.1.2 - No aria-modal="true" */}
      {/* VIOLATION: 4.1.2 - No aria-labelledby or aria-describedby */}
      <div className="modal-content">
        {/* VIOLATION: 2.4.6 - No accessible title for the dialog */}
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>

        {/* VIOLATION: 2.1.1 - Close button only works with mouse */}
        {/* VIOLATION: 4.1.2 - Button has no accessible name */}
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
    </div>
  );
}

/**
 * INACCESSIBLE DROPDOWN MENU
 */
export function BadDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // VIOLATION: 2.1.1 - Dropdown not keyboard accessible
  // VIOLATION: 4.1.2 - No proper ARIA roles and states
  // VIOLATION: 2.1.2 - Potential keyboard trap

  return (
    <div>
      {/* VIOLATION: 4.1.2 - No aria-haspopup, aria-expanded */}
      <button onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>

      {/* VIOLATION: 4.1.2 - No role="menu" */}
      {/* VIOLATION: 2.1.1 - No keyboard navigation */}
      {isOpen && (
        <ul>
          {/* VIOLATION: 4.1.2 - No role="menuitem" */}
          <li onClick={() => console.log('option 1')}>Option 1</li>
          <li onClick={() => console.log('option 2')}>Option 2</li>
          <li onClick={() => console.log('option 3')}>Option 3</li>
        </ul>
      )}
    </div>
  );
}

/**
 * INACCESSIBLE TABS
 */
export function BadTabs() {
  const [activeTab, setActiveTab] = useState(0);

  // VIOLATION: 4.1.2 - No proper ARIA roles for tabs
  // VIOLATION: 2.1.1 - No keyboard navigation between tabs
  // VIOLATION: 2.4.3 - Tab order not logical

  return (
    <div>
      {/* VIOLATION: 4.1.2 - No role="tablist" */}
      <div className="tabs">
        {/* VIOLATION: 4.1.2 - No role="tab" */}
        {/* VIOLATION: 4.1.2 - No aria-selected */}
        <button
          onClick={() => setActiveTab(0)}
          className={activeTab === 0 ? 'active' : ''}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? 'active' : ''}
        >
          Tab 2
        </button>
      </div>

      {/* VIOLATION: 4.1.2 - No role="tabpanel" */}
      {/* VIOLATION: 4.1.2 - No aria-labelledby */}
      <div className="tab-content">
        {activeTab === 0 && <p>Content for tab 1</p>}
        {activeTab === 1 && <p>Content for tab 2</p>}
      </div>
    </div>
  );
}

/**
 * INACCESSIBLE ACCORDION
 */
export function BadAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // VIOLATION: 4.1.2 - No proper ARIA roles for accordion
  // VIOLATION: 2.1.1 - May not be keyboard accessible

  return (
    <div>
      {/* VIOLATION: 4.1.2 - No role="region" with aria-label */}
      <div>
        {/* VIOLATION: 4.1.2 - No aria-expanded */}
        {/* VIOLATION: 4.1.2 - No aria-controls */}
        <button onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}>
          Section 1
        </button>
        {/* VIOLATION: 4.1.2 - No role="region" or aria-hidden */}
        {openIndex === 0 && <p>Content for section 1</p>}
      </div>

      <div>
        <button onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}>
          Section 2
        </button>
        {openIndex === 1 && <p>Content for section 2</p>}
      </div>
    </div>
  );
}