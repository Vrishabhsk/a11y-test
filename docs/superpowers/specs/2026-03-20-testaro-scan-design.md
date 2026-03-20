# Testaro Accessibility Scanner Workflow

## Overview

A GitHub Actions workflow that runs Testaro with 9 free accessibility tools against user-provided URLs, generates an HTML report, and saves it as a CI artifact. The workflow fails if any accessibility violations are detected.

## Workflow Details

### Trigger
- `workflow_dispatch` (manual trigger only)

### Inputs
| Name | Description | Required | Type |
|------|-------------|----------|------|
| `urls` | Newline-delimited list of URLs to scan | Yes | string |

### Outputs
| Name | Description |
|------|-------------|
| `report` | Path to generated HTML report artifact |

### Jobs
- `accessibility_scan`: Runs on `ubuntu-latest`

### Steps
1. Setup Node.js (lts/*)
2. Install Testaro and dependencies
3. Install Playwright browsers
4. Create Testaro job configuration
5. Execute Testaro scan
6. Generate HTML report
7. Upload artifact

## Tools Included

9 free accessibility tools (no API keys required):

| Tool | Rules | Description |
|------|-------|-------------|
| Alfa | 64 | Siteimprove's automated accessibility testing |
| ASLint | 129 | eSSENTIAL Accessibility linter |
| Axe | 79 | Deque's industry-standard accessibility engine |
| Editoria11y | 23 | Princeton's editorial accessibility checker |
| HTML CodeSniffer | 110 | Squiz Labs HTML accessibility checker |
| IBM Accessibility Checker | 93 | IBM's accessibility evaluation tool |
| Nu Html Checker | 260 | W3C's HTML validator |
| QualWeb | 115 | University of Lisbon's ACT rules implementation |
| Testaro | 47 | CVS Health's ensemble accessibility tester |

**Total: ~920 rules**

## Configuration

### Job Format
```json
{
  "id": "scan-{timestamp}",
  "what": "Accessibility scan",
  "strict": true,
  "standard": "only",
  "device": "default",
  "browserID": "chromium",
  "target": { "url": "{url}" },
  "acts": [
    { "type": "launch" },
    { "type": "test", "which": "alfa" },
    { "type": "test", "which": "aslint" },
    { "type": "test", "which": "axe" },
    { "type": "test", "which": "ed11y" },
    { "type": "test", "which": "htmlcs" },
    { "type": "test", "which": "ibm" },
    { "type": "test", "which": "nuVal" },
    { "type": "test", "which": "qualWeb" },
    { "type": "test", "which": "testaro" }
  ]
}
```

### Failure Criteria
- Exit code 1 if any tool reports violations (totals > 0)
- Exit code 0 only if all tools report zero violations

## HTML Report

The generated report includes:
- Summary of violations by severity level
- List of failed rules with descriptions
- Links to WCAG criteria for each violation
- Timestamps and scan metadata

## Artifacts

- Name: `a11y-report-{timestamp}`
- Retention: 30 days (GitHub default)
- Contains: `report.html`

## File Structure

```
.github/workflows/
└── testaro-scan.yml     # Main workflow file
```

## Future Enhancements (Phase 2)

- Interactive scans (click, hover, navigation)
- Multiple device simulation
- Screenshot capture of violations
- Commit report to repository
- Comment results on PRs