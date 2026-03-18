import React from 'react';

/**
 * BAD HEADINGS COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */

/**
 * SKIPPED HEADING LEVELS
 */
export function BadHeadingStructure() {
  // VIOLATION: 1.3.1 - Heading levels skipped
  // Screen reader users rely on heading hierarchy for navigation
  return (
    <article>
      <h1>Main Article Title</h1>
      <h3>First Section</h3>  {/* VIOLATION: Skipped h2 */}
      <p>Content...</p>
      <h5>Subsection</h5>  {/* VIOLATION: Skipped h4 */}
      <p>More content...</p>
    </article>
  );
}

/**
 * MULTIPLE H1 TAGS
 */
export function MultipleH1() {
  // VIOLATION: 1.3.1 - More than one h1 per page
  // VIOLATION: G140 - Multiple h1 elements confuse page structure
  return (
    <div>
      <h1>First Main Heading</h1>
      <p>Some content</p>
      <h1>Second Main Heading</h1>  {/* VIOLATION: Should be h2 */}
      <p>More content</p>
    </div>
  );
}

/**
 * HEADING FOR STYLING
 */
export function HeadingForStyling() {
  // VIOLATION: 1.3.1 - Using heading for visual styling only
  // Headings should define structure, not appearance
  return (
    <div>
      <h2>Contact Us</h2>
      <h4>Phone: 555-1234</h4>  {/* VIOLATION: Not a heading semantically */}
      <h4>Email: test@example.com</h4>
    </div>
  );
}

/**
 * EMPTY HEADING
 */
export function EmptyHeading() {
  // VIOLATION: 2.4.6 - Empty heading
  // VIOLATION: 1.3.1 - Heading with no content
  return (
    <section>
      <h2></h2>  {/* VIOLATION: Empty heading */}
      <p>Content under empty heading</p>
    </section>
  );
}

/**
 * LONG HEADING
 */
export function LongHeading() {
  // VIOLATION: 2.4.6 - Heading too long (should be under 60 characters)
  // Screen readers may truncate long headings
  return (
    <article>
      <h1>
        This is an extremely long heading that goes on and on and on and on
        and really should be shorter for accessibility but instead it just
        keeps going way past what is reasonable for a heading element
      </h1>
      <p>Content...</p>
    </article>
  );
}