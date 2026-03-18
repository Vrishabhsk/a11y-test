import React from 'react';
import { BadButton, IconButton } from './BadButton';
import { BadForm, CheckboxForm, SearchForm } from './BadForm';
import { InformativeImage, BackgroundImageCard, ComplexChart } from './BadImages';
import { BadLinks, IconLink, ExternalLink } from './BadLinks';
import { BadHeadingStructure, MultipleH1 } from './BadHeadings';
import { LowContrastText, LowContrastButton } from './BadColorContrast';
import { BadModal, BadDropdown, BadTabs } from './BadModal';

/**
 * BAD PAGE COMPONENT - Aggregates all accessibility violations
 * DO NOT USE THIS CODE IN PRODUCTION
 *
 * WCAG VIOLATIONS SUMMARY:
 *
 * CRITICAL (Level A violations blocking users):
 * - 1.1.1: Images without alt text (BadImages.tsx)
 * - 2.1.1: Keyboard accessibility (BadButton.tsx, BadModal.tsx)
 * - 2.1.2: No keyboard trap (BadModal.tsx)
 * - 4.1.2: Name, Role, Value (BadButton.tsx, BadModal.tsx)
 * - 3.3.2: Labels or Instructions (BadForm.tsx)
 *
 * IMPORTANT (Level AA violations):
 * - 1.3.1: Info and Relationships (BadHeadings.tsx, BadForm.tsx)
 * - 1.4.3: Contrast Minimum (BadColorContrast.tsx)
 * - 1.4.11: Non-text Contrast (BadColorContrast.tsx)
 * - 2.4.4: Link Purpose (BadLinks.tsx)
 * - 2.4.7: Focus Visible (BadButton.tsx)
 *
 * SUGGESTION (Improvements):
 * - Landmarks missing
 * - Page language not set
 * - Skip link missing
 *
 * NIT (Best practices):
 * - Autocomplete attributes
 * - Focus management
 */

// VIOLATION: 3.1.1 - Page missing lang attribute (should be on <html>)
// VIOLATION: 1.3.1 - No landmarks (main, nav, aside, etc.)
// VIOLATION: 2.4.1 - No skip link
export function BadPage() {
  return (
    <div>
      {/* VIOLATION: Should have <header> landmark */}
      <div className="header">
        <h1>Company Name</h1>
        <nav>
          <BadLinks />
        </nav>
      </div>

      {/* VIOLATION: Should have <main> landmark */}
      <div className="main-content">
        <section>
          <BadHeadingStructure />
          <LowContrastText />
        </section>

        <section>
          <h2>Images Section</h2>
          <InformativeImage src="/photo.jpg" />
          <ComplexChart />
          <BackgroundImageCard />
        </section>

        <section>
          <h2>Form Section</h2>
          <BadForm />
          <SearchForm />
        </section>

        <section>
          <h2>Interactive Elements</h2>
          <BadButton onClick={() => console.log('clicked')} />
          <BadDropdown />
          <BadTabs />
        </section>
      </div>

      {/* VIOLATION: Should have <footer> landmark */}
      <div className="footer">
        <p>Copyright 2024</p>
        <ExternalLink />
      </div>
    </div>
  );
}

export default BadPage;