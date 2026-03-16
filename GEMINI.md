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
│   ├── a11y.yml                  # Basic accessibility tests
│   ├── multi-lang-a11y.yml       # Multi-language static analysis
│   ├── gemini-a11y-dispatch.yml  # Dispatch workflow for Gemini A11y reviews
│   ├── gemini-a11y-review.yml    # Gemini A11y review task
│   ├── ollama-pr-review.yml      # Ollama general code review
│   ├── GEMINI_A11Y_README.md     # Gemini A11y documentation
│   └── OLLAMA_REVIEW_README.md   # Ollama review documentation
├── scripts/
│   └── test-a11y.sh              # Multi-language test script
.gemini/
└── commands/
    └── a11y-review.toml          # Custom WCAG 2.1/2.2 review prompt
examples/
├── bad-accessibility.html        # HTML examples
├── wordpress-template.php        # WordPress examples
└── frappe_bad_a11y.py           # Frappe/Python examples
```

## Testing Workflow

1. **Static Analysis**: ESLint + html-validate + custom patterns
2. **Component Testing**: jest-axe for React components
3. **Gemini AI Review**: Automated PR review for a11y issues
4. **Ollama Code Review**: General code quality review using local LLM

## How to Trigger Gemini A11y Review

### Automatic Triggers
- **PR Opened/Reopened**: When a pull request is opened or reopened against `main` or `master`
- **PR Synchronized**: When new commits are pushed to an existing PR

### Manual Triggers
- Comment `@gemini-cli /a11y-review` on any PR to trigger a manual review
- You can add additional context: `@gemini-cli /a11y-review focus on keyboard navigation`

### Prerequisites
1. **GEMINI_API_KEY**: Must be set in repository secrets (Settings > Secrets and variables > Actions)
2. **GitHub Token**: The workflow uses `GITHUB_TOKEN` for PR interactions
3. **Optional**: Set up a GitHub App for enhanced authentication (see `APP_ID` and `APP_PRIVATE_KEY`)

### What Gets Reviewed
The Gemini A11y Review focuses exclusively on:
- **WCAG 2.1 Level A & AA** compliance
- **WCAG 2.2** new success criteria
- **Perceivable**: Alt text, color contrast, text resizing, reflow
- **Operable**: Keyboard navigation, focus management, target size
- **Understandable**: Form labels, error identification, language
- **Robust**: Valid HTML, ARIA usage, semantic structure

### Review Output
- Inline comments on specific lines with WCAG violations
- Severity levels: 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low
- WCAG success criterion references for each violation
- Code suggestions for fixing violations
- Summary with compliance overview

## How to Trigger Ollama Code Review

### Automatic Triggers
- **PR Opened/Reopened/Synchronize**: Automatically runs on all PRs to `main` or `master`

### What Gets Reviewed
The Ollama Code Review provides general code quality analysis:
- **Code Quality**: Best practices and conventions
- **Bug Detection**: Logic errors and edge cases
- **Security**: Vulnerability identification
- **Performance**: Optimization opportunities
- **Maintainability**: Code structure and readability

### Review Output
- Risk score (1-5 scale)
- Detailed comments on issues
- Code suggestions with examples
- Security and performance notes

### Configuration
- **Model**: `glm-5:cloud` (cloud-hosted, no GPU required)
- **Translation**: `glm-5:cloud` (same model for both tasks)
- **Language**: English (configurable)
- **Ollama URL**: `https://valued-learned-reflect-introduce.trycloudflare.com`

### No Setup Required
Unlike Gemini, this workflow uses the built-in `GITHUB_TOKEN` and connects to a cloud-hosted Ollama server with `glm-5:cloud`. No additional secrets or local GPU needed!

## AI Review Comparison

| Feature | Gemini A11y Review | Ollama PR Review |
|---------|-------------------|------------------|
| **Focus** | Accessibility (WCAG) | General code quality |
| **Trigger** | `@gemini-cli /a11y-review` or automatic | Automatic on all PRs |
| **Model** | Google Gemini API | Local Ollama (qwen2.5-coder) |
| **Cost** | Requires API key | Free (self-hosted) |
| **Setup** | Requires `GEMINI_API_KEY` secret | No setup needed |
| **Scope** | A11y violations only | Full code review |

## Coding Conventions

- Use semantic HTML elements
- Provide alt text for all images
- Use proper heading hierarchy
- Ensure keyboard accessibility
- Test with screen readers when possible