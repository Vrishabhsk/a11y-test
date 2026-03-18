import React from 'react';

/**
 * BAD IMAGES COMPONENT - Contains intentional accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 */

interface ImageProps {
  src: string;
}

/**
 * MISSING ALT TEXT - Critical violation
 */
export function InformativeImage({ src }: ImageProps) {
  // VIOLATION: 1.1.1 (CRITICAL) - Informative image has no alt text
  // Screen readers will announce the filename or nothing
  return (
    <img src={src} />
  );
}

/**
 * DECORATIVE IMAGE - Should have empty alt
 */
export function DecorativeImage({ src }: ImageProps) {
  // VIOLATION: 1.1.1 - Decorative image should have alt="" not meaningful alt
  // This confuses screen readers about image purpose
  return (
    <img src={src} alt="A decorative border image that adds visual interest" />
  );
}

/**
 * BACKGROUND IMAGE - Contains text but no alt
 */
export function BackgroundImageCard() {
  // VIOLATION: 1.1.1 - Image of text has no alt text
  // VIOLATION: 1.4.5 - Image of text instead of real text
  return (
    <div
      style={{
        backgroundImage: 'url("/promo-banner.png")',
        width: '100%',
        height: '200px'
      }}
    >
      {/* This is a common pattern that's inaccessible */}
    </div>
  );
}

/**
 * COMPLEX IMAGE - Missing long description
 */
export function ComplexChart() {
  // VIOLATION: 1.1.1 - Complex image needs detailed description
  // alt is too brief for charts/diagrams
  return (
    <figure>
      <img
        src="/sales-chart.png"
        alt="Chart"
      />
      {/* VIOLATION: Missing figcaption or aria-describedby */}
    </figure>
  );
}

/**
 * IMAGE LINK - Alt describes image not destination
 */
export function ImageLink({ src }: ImageProps) {
  // VIOLATION: 2.4.4 - Link purpose not clear from alt text
  // VIOLATION: 1.1.1 - Alt should describe link destination, not image
  return (
    <a href="/products">
      <img src={src} alt="Photo of product box" />
    </a>
  );
}

/**
 * SVG ICON - Missing accessible name
 */
export function SvgIcon() {
  // VIOLATION: 4.1.2 - SVG without accessible name
  // VIOLATION: 1.1.1 - SVG should have <title> or aria-label
  return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
    </svg>
  );
}