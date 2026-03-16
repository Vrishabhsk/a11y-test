# Ollama PR Review Workflow

This workflow uses the `ollama-pr-review-action` to perform AI-powered code reviews on pull requests using Ollama models.

## Overview

The Ollama PR Review workflow automatically analyzes pull request diffs and posts detailed code review comments using locally-hosted Ollama models via a Cloudflare tunnel.

## Workflow File

- `ollama-pr-review.yml` - Main workflow that triggers on PR events

## Triggers

The workflow runs on:
- **PR Opened**: When a new pull request is opened
- **PR Synchronize**: When new commits are pushed to an existing PR
- **PR Reopened**: When a closed PR is reopened

## Configuration

### Required Inputs

| Input | Description | Default |
|-------|-------------|---------|
| `OLLAMA_API_URL` | URL of the Ollama API server | `https://valued-learned-reflect-introduce.trycloudflare.com` |
| `MY_GITHUB_TOKEN` | GitHub token for PR comments | `${{ secrets.GITHUB_TOKEN }}` |
| `OWNER` | Repository owner | `${{ github.repository_owner }}` |
| `REPO` | Repository name | `${{ github.event.repository.name }}` |
| `PR_NUMBER` | Pull request number | `${{ github.event.pull_request.number }}` |

### Optional Inputs

| Input | Description | Default |
|-------|-------------|---------|
| `MODEL` | Ollama model for code review | `glm-5:cloud` |
| `TRANSLATION_MODEL` | Model for translation | `glm-5:cloud` |
| `RESPONSE_LANGUAGE` | Output language | `English` |
| `CUSTOM_PROMPT` | Additional review instructions | See below |

## Default Custom Prompt

The workflow includes a custom prompt that asks the model to review for:

1. **Code quality and best practices** - Following language conventions and patterns
2. **Potential bugs or issues** - Logic errors, edge cases, null pointer exceptions
3. **Security vulnerabilities** - Injection attacks, unsafe operations, data exposure
4. **Performance optimizations** - Inefficient algorithms, memory leaks, slow operations
5. **Maintainability and readability** - Clear naming, proper documentation, code structure

## Models Used

### Cloud Model: `glm-5:cloud`
- Cloud-hosted model for both code review and translation
- No local GPU resources required
- Handles both code analysis and language translation
- Optimized for general code review tasks

## Review Output

The action provides:
- **Risk Score**: 1-5 scale indicating overall code quality
- **Detailed Comments**: Line-by-line feedback on issues
- **Code Suggestions**: Specific improvements with examples
- **Security Analysis**: Identification of potential vulnerabilities
- **Performance Notes**: Optimization opportunities

## Setup Requirements

### 1. No Additional Secrets Required

This workflow uses the built-in `GITHUB_TOKEN` which is automatically provided by GitHub Actions.

### 2. Ollama Server

The workflow connects to an Ollama server at the specified URL. Ensure:
- The Ollama server is running and accessible at `https://valued-learned-reflect-introduce.trycloudflare.com`
- The cloud model `glm-5:cloud` is available on the server
- No local GPU resources required - the cloud model handles all processing

### 3. Model Requirements

To use this workflow, your Ollama server needs the cloud model:

```bash
# Pull the cloud model (if not already available)
ollama pull glm-5:cloud
```

**Note**: Since we're using a cloud model, no local GPU resources are required. The model runs on cloud infrastructure.

## Usage

### Automatic Reviews

The workflow automatically runs when:
- A PR is opened against `main` or `master`
- New commits are pushed to a PR
- A PR is reopened

### Review Comments

The action will post a comprehensive review comment on the PR with:
- Overall risk assessment
- Categorized findings (bugs, security, performance, etc.)
- Code suggestions with examples
- Line references for specific issues

## Customization

### Changing the Model

To use a different model, update the workflow:

```yaml
with:
  MODEL: 'glm-5:cloud'  # Cloud model
  TRANSLATION_MODEL: 'glm-5:cloud'  # Same model for translation
```

**Note**: We're using `glm-5:cloud` which is a cloud-hosted model, so no local GPU is required.

### Changing the Language

To get reviews in a different language:

```yaml
with:
  RESPONSE_LANGUAGE: 'Korean'  # or 'Spanish', 'French', etc.
```

### Customizing Review Focus

Modify the `CUSTOM_PROMPT` to focus on specific areas:

```yaml
CUSTOM_PROMPT: |
  Please focus on:
  1. Security vulnerabilities and best practices
  2. API design and backward compatibility
  3. Error handling and edge cases
```

## Hardware Requirements

### For Cloud Models
Since we're using `glm-5:cloud`, **no local GPU resources are required**:
- **GPU**: None needed (cloud-hosted)
- **RAM**: Standard GitHub Actions runner (2GB+)
- **Storage**: Minimal (just the action code)

The cloud model handles all processing remotely, making this workflow lightweight and accessible.

## Troubleshooting

### Workflow Fails with "Connection Error"

1. Verify the Ollama server is running at the specified URL
2. Check network connectivity from GitHub Actions to your server
3. Ensure the Cloudflare tunnel is active

### Model Not Found Error

1. The cloud model `glm-5:cloud` should be pre-configured on the server
2. If you encounter issues, verify the model is available on your Ollama cloud instance
3. Contact your cloud provider if the model is not accessible

### Review Not Posted

1. Check that `GITHUB_TOKEN` has `pull-requests: write` permission
2. Verify the workflow has the correct permissions in the YAML
3. Check workflow logs for error messages

### Timeout Issues

If the review takes too long:
1. Increase `timeout-minutes` in the workflow
2. Use smaller models (7B instead of 32B)
3. Check GPU utilization on the Ollama server

## Security Considerations

- The Ollama API URL is hardcoded in the workflow (Cloudflare tunnel)
- Uses `GITHUB_TOKEN` which is automatically managed by GitHub
- No additional secrets required
- Review data is processed by your own Ollama server (not third-party)

## Comparison with Gemini A11y Review

| Feature | Ollama PR Review | Gemini A11y Review |
|---------|------------------|-------------------|
| **Focus** | General code quality | Accessibility (WCAG) |
| **Model** | Local Ollama (qwen2.5-coder) | Google Gemini API |
| **Cost** | Free (self-hosted) | Requires API key |
| **Language** | Configurable | English |
| **Scope** | Full code review | A11y violations only |
| **Hosting** | Self-hosted GPU server | Cloud (Google) |

## Resources

- [Ollama PR Review Action](https://github.com/ray5273/ollama-pr-review-action)
- [Ollama Documentation](https://github.com/ollama/ollama)
- [Qwen2.5 Coder Model](https://ollama.com/library/qwen2.5-coder)
- [ExaOne Model](https://ollama.com/library/exaone3.5)
