import React from 'react';

/**
 * BAD NAVIGATION COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */
export function BadNavigation() {
  return (
    <div>
      {/* VIOLATION: 1.3.1 - Navigation not marked with nav element or role="navigation" */}
      {/* VIOLATION: 2.4.1 - No skip link to main content */}
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

/**
 * BAD BREADCRUMB - Missing ARIA attributes
 */
export function BadBreadcrumb({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div>
      {/* VIOLATION: 4.1.2 - Breadcrumb not marked with aria-label */}
      {/* VIOLATION: 4.1.2 - Missing role="navigation" or nav element */}
      <div>
        {items.map((item, index) => (
          <span key={index}>
            <a href={item.href}>{item.label}</a>
            {/* VIOLATION: 1.1.1 - Separator not hidden from screen readers */}
            {index < items.length - 1 && <span> &gt; </span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * BAD PAGINATION - Missing ARIA attributes
 */
export function BadPagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  return (
    <div>
      {/* VIOLATION: 4.1.2 - Pagination not marked with role="navigation" */}
      {/* VIOLATION: 2.4.8 - Current page not indicated */}
      <div>
        <button disabled={currentPage === 1}>Previous</button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            style={{ fontWeight: page === currentPage ? 'bold' : 'normal' }}
          >
            {page}
          </button>
        ))}
        
        <button disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

/**
 * BAD MENU - Missing ARIA menu pattern
 */
export function BadMenu({ items }: { items: { label: string; action: () => void }[] }) {
  return (
    <div>
      {/* VIOLATION: 4.1.2 - Menu button missing aria-haspopup and aria-expanded */}
      <button>Menu</button>
      
      {/* VIOLATION: 4.1.2 - Menu items not marked with role="menuitem" */}
      {/* VIOLATION: 2.1.1 - No keyboard navigation support */}
      <div style={{ display: 'none' }}>
        {items.map((item, index) => (
          <div key={index} onClick={item.action}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * BAD SKIP LINK - Missing or improperly implemented
 */
export function BadSkipLink() {
  return (
    <div>
      {/* VIOLATION: 2.4.1 - Skip link not visible on focus */}
      {/* VIOLATION: 2.4.1 - Skip link targets non-existent element */}
      <a href="#main" style={{ position: 'absolute', left: '-9999px' }}>
        Skip to main content
      </a>
      
      {/* VIOLATION: 2.4.1 - Main content missing id="main" */}
      <div>
        <h1>Page Title</h1>
        <p>Main content goes here</p>
      </div>
    </div>
  );
}
