/**
 * A11Y Violation Examples - DO NOT USE IN PRODUCTION
 *
 * These components intentionally violate WCAG guidelines for testing.
 * Import these to test the a11y-pr-review action.
 */

// WCAG 1.1.1 - Non-text Content
export { InformativeImage, DecorativeImage, BackgroundImageCard, ComplexChart, ImageLink, SvgIcon } from './BadImages';

// WCAG 1.3.1 - Info and Relationships
export { BadHeadingStructure, MultipleH1, HeadingForStyling, EmptyHeading } from './BadHeadings';
export { CheckboxForm } from './BadForm';

// WCAG 1.4.3 & 1.4.11 - Contrast
export { LowContrastText, LowContrastButton, LowContrastLink, PlaceholderText, DarkBackground } from './BadColorContrast';

// WCAG 2.1.1 & 2.1.2 - Keyboard Accessible
export { BadButton, BadButtonNoFocus, IconButton } from './BadButton';

// WCAG 2.4.4 - Link Purpose
export { BadLinks, DuplicateLinks, ImageLink, IconLink } from './BadLinks';

// WCAG 2.4.7 - Focus Visible
export { BadButtonNoFocus } from './BadButton';

// WCAG 3.3.1 & 3.3.2 - Error Identification & Labels
export { BadForm, SearchForm } from './BadForm';

// WCAG 4.1.2 - Name, Role, Value
export { BadModal, BadDropdown, BadTabs, BadAccordion } from './BadModal';

// Aggregated page with all violations
export { BadPage } from './BadPage';