import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { BadAccessibility } from '../components/BadAccessibility';

expect.extend(toHaveNoViolations);

describe('BadAccessibility Component', () => {
  it('should have accessibility violations', async () => {
    const { container } = render(<BadAccessibility />);
    const results = await axe(container);
    
    // This test will fail because the component has a11y violations
    expect(results).toHaveNoViolations();
  });
});