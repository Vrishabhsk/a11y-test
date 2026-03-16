#!/bin/bash

# Multi-language accessibility testing script
# This script tests files based on their extension

set -e

CHANGED_FILES="$1"
EXIT_CODE=0

echo "🔍 Testing accessibility for changed files..."
echo "Files to test: $CHANGED_FILES"
echo ""

# Function to test React/JSX files
test_jsx_react() {
    local file="$1"
    echo "🧪 Testing React/JSX file: $file"
    
    if npx eslint "$file" --max-warnings=0 2>/dev/null; then
        echo "✅ $file passed JSX a11y checks"
    else
        echo "❌ $file failed JSX a11y checks"
        EXIT_CODE=1
    fi
}

# Function to test HTML files
test_html() {
    local file="$1"
    echo "🧪 Testing HTML file: $file"
    
    if npx html-validate "$file" 2>/dev/null; then
        echo "✅ $file passed HTML a11y checks"
    else
        echo "❌ $file failed HTML a11y checks"
        EXIT_CODE=1
    fi
}

# Function to test PHP files
test_php() {
    local file="$1"
    echo "🧪 Testing PHP file: $file"
    
    # Check for common PHP a11y issues using grep patterns
    local violations=0
    
    # Check for images without alt
    if grep -E '<img[^>]*>' "$file" | grep -v 'alt=' >/dev/null 2>&1; then
        echo "   ⚠️  Found images without alt attribute"
        violations=$((violations + 1))
    fi
    
    # Check for links without href
    if grep -E '<a[^>]*>.*</a>' "$file" | grep -v 'href=' >/dev/null 2>&1; then
        echo "   ⚠️  Found links without href attribute"
        violations=$((violations + 1))
    fi
    
    # Check for form inputs without labels
    if grep -E '<input[^>]*>' "$file" >/dev/null 2>&1; then
        if ! grep -E '<label[^>]*>' "$file" >/dev/null 2>&1; then
            echo "   ⚠️  Found form inputs without labels"
            violations=$((violations + 1))
        fi
    fi
    
    # Check for buttons without type
    if grep -E '<button[^>]*>' "$file" | grep -v 'type=' >/dev/null 2>&1; then
        echo "   ⚠️  Found buttons without type attribute"
        violations=$((violations + 1))
    fi
    
    # Check for tables without proper structure
    if grep -E '<table[^>]*>' "$file" >/dev/null 2>&1; then
        if ! grep -E '<th[^>]*>' "$file" >/dev/null 2>&1; then
            echo "   ⚠️  Found tables without header cells"
            violations=$((violations + 1))
        fi
    fi
    
    if [ $violations -eq 0 ]; then
        echo "✅ $file passed PHP a11y checks"
    else
        echo "❌ $file failed PHP a11y checks ($violations violations)"
        EXIT_CODE=1
    fi
}

# Function to test Vue files
test_vue() {
    local file="$1"
    echo "🧪 Testing Vue file: $file"
    
    # Vue files can use ESLint with vue-a11y plugin
    if npx eslint "$file" --max-warnings=0 2>/dev/null; then
        echo "✅ $file passed Vue a11y checks"
    else
        echo "❌ $file failed Vue a11y checks"
        EXIT_CODE=1
    fi
}

# Function to test Angular files
test_angular() {
    local file="$1"
    echo "🧪 Testing Angular file: $file"
    
    if npx eslint "$file" --max-warnings=0 2>/dev/null; then
        echo "✅ $file passed Angular a11y checks"
    else
        echo "❌ $file failed Angular a11y checks"
        EXIT_CODE=1
    fi
}

# Function to test generic template files
test_template() {
    local file="$1"
    echo "🧪 Testing template file: $file"
    
    # Basic HTML pattern checks
    local violations=0
    
    # Check for images without alt
    if grep -E '<img[^>]*>' "$file" | grep -v 'alt=' >/dev/null 2>&1; then
        echo "   ⚠️  Found images without alt attribute"
        violations=$((violations + 1))
    fi
    
    # Check for links without href
    if grep -E '<a[^>]*>.*</a>' "$file" | grep -v 'href=' >/dev/null 2>&1; then
        echo "   ⚠️  Found links without href attribute"
        violations=$((violations + 1))
    fi
    
    if [ $violations -eq 0 ]; then
        echo "✅ $file passed template a11y checks"
    else
        echo "❌ $file failed template a11y checks ($violations violations)"
        EXIT_CODE=1
    fi
}

# Main loop
for file in $CHANGED_FILES; do
    # Skip deleted files and non-existent files
    [ ! -f "$file" ] && continue
    
    # Skip node_modules and build directories
    [[ "$file" == *"node_modules"* ]] && continue
    [[ "$file" == *"dist"* ]] && continue
    [[ "$file" == *"build"* ]] && continue
    
    case "$file" in
        *.jsx|*.tsx)
            test_jsx_react "$file"
            ;;
        *.html|*.htm)
            test_html "$file"
            ;;
        *.php)
            test_php "$file"
            ;;
        *.vue)
            test_vue "$file"
            ;;
        *.component.html|*.component.ts)
            test_angular "$file"
            ;;
        *.twig|*.blade.php|*.erb|*.ejs|*.hbs)
            test_template "$file"
            ;;
        *)
            echo "⏭️  Skipping $file (no a11y rules defined)"
            ;;
    esac
    echo ""
done

if [ $EXIT_CODE -eq 0 ]; then
    echo "🎉 All accessibility tests passed!"
else
    echo "💥 Some accessibility tests failed. Please fix the issues above."
fi

exit $EXIT_CODE
