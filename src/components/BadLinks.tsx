import React from 'react';

/**
 * BAD LINKS COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */

/**
 * VAGUE LINK TEXT - Unclear purpose
 */
export function BadLinks() {
  return (
    <div>
      {/* VIOLATION: 2.4.4 - Link text doesn't describe destination */}
      <p>
        For more information, <a href="/docs">click here</a>.
      </p>

      {/* VIOLATION: 2.4.4 - "Read more" is vague */}
      <article>
        <h3>Article Title</h3>
        <p>Summary...</p>
        <a href="/article/1">Read more</a>
      </article>

      {/* VIOLATION: 2.4.4 - "Learn more" without context */}
      <a href="/features">Learn more</a>

      {/* VIOLATION: 2.4.4 - Non-descriptive link */}
      <a href="/download">Download</a>
    </div>
  );
}

/**
 * SAME LINK TEXT - Different destinations
 */
export function DuplicateLinks() {
  // VIOLATION: 2.4.4 - Same link text pointing to different URLs
  // Screen reader users can't distinguish between these
  return (
    <div>
      <section>
        <h3>Product A</h3>
        <a href="/products/a/details">Details</a>
      </section>

      <section>
        <h3>Product B</h3>
        <a href="/products/b/details">Details</a>
      </section>
    </div>
  );
}

/**
 * IMAGE LINK - Missing alt
 */
export function ImageLink() {
  // VIOLATION: 1.1.1 - Image link without alt text
  // VIOLATION: 2.4.4 - Link purpose unknown
  return (
    <a href="/home">
      <img src="/logo.png" />
    </a>
  );
}

/**
 * ICON LINK - No accessible name
 */
export function IconLink() {
  // VIOLATION: 4.1.2 - Link has no accessible name
  // VIOLATION: 2.4.4 - Link purpose unclear
  return (
    <a href="/settings">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    </a>
  );
}

/**
 * NEW WINDOW LINK - Not announced
 */
export function ExternalLink() {
  // VIOLATION: 2.5.6 - Opens in new window but not announced
  // VIOLATION: G201 - No warning about opening new window
  return (
    <a href="https://example.com" target="_blank">
      External site
    </a>
  );
}