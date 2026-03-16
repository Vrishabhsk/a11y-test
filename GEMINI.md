# Project Context for Gemini CLI

This repository is dedicated to testing accessibility (a11y) compliance across multiple programming languages and frameworks.

## Project Purpose

This project provides GitHub Actions workflows and tools for automated accessibility testing in CI/CD pipelines.

## Supported Languages & Frameworks

- **React/JSX**: Using `eslint-plugin-jsx-a11y` for static analysis
- **HTML**: Using `html-validate` with accessibility rules
- **PHP/WordPress**: Custom pattern-based checking for WordPress templates
- **Python/Frappe**: Static analysis of HTML strings in Python code
- **Vue/Angular**: ESLint-based accessibility linting

## Accessibility Standards

We test against **WCAG 2.1 Level A and AA** compliance:

### Critical Checks
1. Images must have alt text
2. Form inputs must have associated labels
3. Links must have href attributes
4. Buttons should have type attributes
5. Tables must have header cells
6. Clickable elements must support keyboard navigation
7. Text must have sufficient color contrast
8. Interactive elements need accessible names
9. Headings should not be empty
10. Only one H1 per page

## File Structure

```
.github/
├── workflows/
│   ├── multi-lang-a11y.yml      # Multi-language static analysis
│   ├── gemini-a11y-dispatch.yml  # Dispatch workflow for Gemini
│   └── gemini-a11y-review-task.yml # Gemini review task
├── scripts/
│   └── test-a11y.sh             # Multi-language test script
examples/
├── bad-accessibility.html        # HTML examples
├── wordpress-template.php        # WordPress examples
└── frappe_bad_a11y.py           # Frappe/Python examples
```

## Testing Workflow

1. **Static Analysis**: ESLint + html-validate + custom patterns
2. **Component Testing**: jest-axe for React components
3. **Gemini AI Review**: Automated PR review for a11y issues

## How to Trigger Gemini Review

- Comment `@gemini-a11y` on any pull request
- Automatic review triggers on PR open

## Coding Conventions

- Use semantic HTML elements
- Provide alt text for all images
- Use proper heading hierarchy
- Ensure keyboard accessibility
- Test with screen readers when possible