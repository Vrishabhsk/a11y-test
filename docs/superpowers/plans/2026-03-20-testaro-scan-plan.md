# Testaro Accessibility Scanner Workflow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a GitHub Actions workflow that runs Testaro with 9 free accessibility tools against user-provided URLs, generates an HTML report, and saves it as a CI artifact. Workflow fails on violations.

**Architecture:** Single workflow file (.github/workflows/testaro-scan.yml) that sets up Node.js, installs Testaro and Playwright, creates a job configuration file, runs the scan, generates an HTML report, and uploads the result as an artifact. Exit code reflects violation presence.

**Tech Stack:** GitHub Actions, Node.js (lts/*), Testaro, Playwright

---

## File Structure

```
.github/workflows/
└── testaro-scan.yml     # Main workflow (creates job config + runs testaro)
```

---

## Task 1: Create testaro-scan.yml workflow

**Files:**
- Create: `.github/workflows/testaro-scan.yml`

- [ ] **Step 1: Write the workflow file**

```yaml
name: Testaro Accessibility Scanner

on:
  workflow_dispatch:
    inputs:
      urls:
        description: 'Newline-delimited list of URLs to scan'
        required: true
        type: string

jobs:
  accessibility_scan:
    runs-on: ubuntu-latest
    steps:
      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 'lts/*'

      - name: Install Testaro and Playwright
        run: |
          npm install -g testaro
          npx playwright install chromium

      - name: Create Testaro job configuration
        run: |
           cat > testaro-job.json << 'EOF'
           {
             "id": "scan-${{ github.run_id }}",
             "what": "Accessibility scan",
             "strict": true,
             "standard": "only",
             "device": "default",
             "browserID": "chromium",
             "target": {},
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
           EOF

      - name: Run Testaro scans
        run: |
          violations=0
          while IFS= read -r url; do
            echo "Scanning: $url"
            
            # Update job with target URL
            sed "s/\"target\": {}/\"target\": { \"url\": \"$url\" }/" testaro-job.json > scan-job.json
            
            # Run testaro
            npx testaro scan scan-job.json --reporter html > report.html 2>&1
            
            # Check for violations - look for any non-zero counts in totals array
            # totals format: [critical, serious, moderate, minor] - any value > 0 means violations
            if grep -qE '"totals":\s*\[[1-9]|[0-9]{2,}' report.html; then
              echo "VIOLATIONS FOUND in $url"
              violations=$((violations + 1))
            fi
          done <<< "${{ inputs.urls }}"
          
          if [ $violations -gt 0 ]; then
            echo "Total URLs with violations: $violations"
            exit 1
          fi
          echo "No violations found"

      - name: Upload HTML Report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: a11y-report-${{ github.run_id }}
          path: report.html
          retention-days: 30

      - name: Report results
        run: |
          echo "Scan completed. Check artifact for detailed HTML report."
```

- [ ] **Step 2: Commit the workflow file**

```bash
git add .github/workflows/testaro-scan.yml
git commit -m "feat: add Testaro accessibility scanner workflow"
```

---

## Task 2: Review and refine the workflow

**Verify:**
- The workflow syntax is valid
- All 9 tools are configured
- Artifact upload happens even on failure
- Exit logic correctly detects violations

**Commands to verify:**
```bash
# Validate YAML syntax
npm install -g action-validator 2>/dev/null || true
# Or manually review the file
cat .github/workflows/testaro-scan.yml
```

---

## Task 3: Test the workflow (manual trigger)

**Steps:**
1. Push to a test branch
2. Navigate to Actions tab in GitHub
3. Trigger "Testaro Accessibility Scanner" workflow
4. Enter a test URL (e.g., https://example.com)
5. Verify artifact is created with HTML report

---

## Notes

### Violation Detection Logic
Uses grep with ERE regex to detect non-zero totals in the HTML report. Accumulates violation count across all URLs and exits with code 1 if any violations found. This is a simplified Phase 1 approach - a more robust solution could parse the JSON output directly.

### Tool Limitations
- Some tools may timeout on very large pages
- Nu Html Checker is strict and may report warnings alongside violations
- Editoria11y focuses on editorial content and may not apply to all pages

### Future Enhancements (Phase 2)
- Add interactive scanning (click, hover, navigate)
- Support multiple URLs with aggregated report
- Add screenshots of violations
- Commit report to repository
- Comment results on PRs