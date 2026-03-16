# Gemini Accessibility Review Workflow

This directory contains GitHub Actions workflows for automated accessibility (a11y) reviews using Google's Gemini AI. The workflow evaluates pull requests against WCAG 2.1 and 2.2 guidelines.

## Overview

The Gemini A11y Review workflow uses the `run-gemini-cli` action to perform AI-powered accessibility analysis on pull request diffs. It focuses exclusively on WCAG compliance and posts detailed feedback as PR comments.

## Workflows

### 1. `gemini-a11y-dispatch.yml`
The dispatch workflow that triggers on PR events and routes to the review workflow.

**Triggers:**
- `pull_request`: opened, reopened, synchronize
- `issue_comment`: created (when `@gemini-cli /a11y-review` is mentioned)

### 2. `gemini-a11y-review.yml`
The main review workflow that runs Gemini CLI with the accessibility-focused prompt.

**Features:**
- Analyzes PR diffs for WCAG 2.1 and 2.2 violations
- Posts inline comments with severity levels
- Provides code suggestions for fixes
- Generates compliance summary

## Setup Instructions

### Step 1: Get a Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Create a new API key
3. Copy the key for the next step

### Step 2: Add Secrets to Your Repository

1. Go to your repository's **Settings > Secrets and variables > Actions**
2. Click **New repository secret**
3. Add the following secrets:

| Secret Name | Value | Required |
|-------------|-------|----------|
| `GEMINI_API_KEY` | Your Gemini API key from Google AI Studio | **Yes** |
| `APP_PRIVATE_KEY` | Private key for GitHub App (optional, for enhanced auth) | No |

### Step 3: Add Repository Variables (Optional)

1. Go to **Settings > Secrets and variables > Actions > Variables**
2. Click **New variable**
3. Add optional configuration variables:

| Variable Name | Description | Default |
|---------------|-------------|---------|
| `GEMINI_CLI_VERSION` | Version of Gemini CLI to install | `latest` |
| `GEMINI_DEBUG` | Enable debug logging | `false` |
| `GEMINI_MODEL` | Specific Gemini model to use | (default) |
| `APP_ID` | GitHub App ID for authentication | (none) |

### Step 4: Update .gitignore

Ensure your `.gitignore` includes:

```gitignore
# gemini-cli settings
.gemini/

# GitHub App credentials
gha-creds-*.json
```

## Usage

### Automatic Reviews

The workflow automatically runs when:
- A PR is opened against `main` or `master`
- A PR is reopened
- New commits are pushed to a PR

### Manual Reviews

To manually trigger a review, comment on a PR:

```
@gemini-cli /a11y-review
```

With additional context:

```
@gemini-cli /a11y-review focus on keyboard navigation and focus management
```

## WCAG Guidelines Covered

### Level A (Critical)
- **1.1.1** Non-text Content - Alt text for images
- **1.3.1** Info and Relationships - Semantic HTML, labels
- **1.4.1** Use of Color - Information not conveyed by color alone
- **2.1.1** Keyboard - All functionality available via keyboard
- **2.1.2** No Keyboard Trap - Users can navigate away
- **2.4.3** Focus Order - Logical focus order
- **2.4.4** Link Purpose - Descriptive link text
- **2.5.3** Label in Name - Accessible name matches visible label
- **3.3.2** Labels or Instructions - Form fields have labels
- **4.1.2** Name, Role, Value - ARIA used correctly

### Level AA (High Priority)
- **1.4.3** Contrast (Minimum) - 4.5:1 for normal text
- **1.4.4** Resize Text - Text can be resized to 200%
- **1.4.10** Reflow - Content reflows at 320px
- **1.4.11** Non-text Contrast - 3:1 for UI components
- **2.4.6** Headings and Labels - Descriptive headings
- **2.4.7** Focus Visible - Keyboard focus indicator visible
- **2.5.5** Target Size - 44x44 CSS pixels minimum

### WCAG 2.2 Additions
- **2.4.11** Focus Not Obscured (Minimum)
- **2.4.12** Focus Not Obscured (Enhanced)
- **2.4.13** Focus Appearance
- **2.5.7** Dragging Movements
- **2.5.8** Target Size (Minimum) - 24x24 CSS pixels

## Review Output Format

### Severity Levels

- 🔴 **Critical**: WCAG Level A violations that prevent users with disabilities from accessing content
- 🟠 **High**: WCAG Level A or critical Level AA violations
- 🟡 **Medium**: WCAG Level AA violations
- 🟢 **Low**: WCAG Level AAA considerations or minor enhancements

### Comment Format

Each comment includes:
- Severity emoji
- Description of the violation
- WCAG success criterion reference
- Impact on users
- Code suggestion (when applicable)

Example:
```
🔴 Image missing alt text

**WCAG Reference:** 1.1.1 Non-text Content (Level A)

**Impact:** Screen reader users cannot understand the image content

```suggestion
<img src="logo.png" alt="Company Logo" />
```
```

## Customization

### Modifying the Review Prompt

The review prompt is defined in `.gemini/commands/a11y-review.toml`. You can customize:

1. **WCAG focus areas**: Add or remove specific success criteria
2. **Severity rules**: Adjust severity assignments
3. **Comment templates**: Modify the output format
4. **Additional checks**: Add project-specific accessibility requirements

### Using Vertex AI (Optional)

For enterprise use, you can configure Vertex AI instead of the Gemini API:

1. Set up Google Cloud Workload Identity Federation
2. Add these variables:
   - `GCP_WIF_PROVIDER`: Workload Identity Provider
   - `GOOGLE_CLOUD_PROJECT`: GCP project ID
   - `GOOGLE_CLOUD_LOCATION`: GCP region
   - `SERVICE_ACCOUNT_EMAIL`: Service account email
3. Set `GOOGLE_GENAI_USE_VERTEXAI` to `true`

## Troubleshooting

### Workflow Not Triggering

1. Check that the PR is targeting `main` or `master`
2. Verify the workflow file is in `.github/workflows/`
3. Ensure `GEMINI_API_KEY` secret is set

### Authentication Errors

1. Verify the API key is valid and has quota available
2. Check that secrets are set at the repository level (not environment level)
3. For GitHub App auth, verify `APP_ID` and `APP_PRIVATE_KEY` are correct

### No Comments Posted

1. Check the workflow logs for errors
2. Enable debug mode by setting `GEMINI_DEBUG` to `true`
3. Verify the PR has actual code changes (not just documentation)

## Security Considerations

- The workflow does not run on forks by default (security measure)
- API keys are stored as encrypted secrets
- Debug mode may expose sensitive information - use with caution
- The workflow has minimal permissions (read contents, write PRs/issues)

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Gemini CLI Documentation](https://github.com/google-gemini/gemini-cli)
- [run-gemini-cli Action](https://github.com/google-github-actions/run-gemini-cli)
