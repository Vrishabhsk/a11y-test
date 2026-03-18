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
export { BadLinks, DuplicateLinks, IconLink } from './BadLinks';

// WCAG 3.3.1 & 3.3.2 - Error Identification & Labels
export { BadForm, SearchForm } from './BadForm';

// WCAG 4.1.2 - Name, Role, Value
export { BadModal, BadDropdown, BadTabs, BadAccordion } from './BadModal';

// WCAG 2.4.1, 2.4.8 - Navigation
export { BadNavigation, BadBreadcrumb, BadPagination, BadMenu, BadSkipLink } from './BadNavigation';

// WCAG 1.3.1 - Tables
export { BadTable, BadDataTable, BadComplexTable, BadLayoutTable, BadGrid } from './BadTable';

// WCAG 4.1.3 - Status Messages
export { BadLiveRegion, BadAlert, BadProgress, BadLoadingSpinner, BadDynamicList, BadSearchResults } from './BadLiveRegion';

// Aggregated page with all violations
export { BadPage } from './BadPage';