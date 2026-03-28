# Lesson 2: JIT Environment Remediation

**Learning Objective:** You will bypass undocumented API failures dynamically.

## Core Content
APIs lie. OpenAPI specs drift. In this lesson, we cover what to do when an endpoint returns 500. Instead of stopping, inspect the backend code (if available), check environment variables, and fall back to alternative auth paths (e.g. \`req.body\` vs \`Bearer\`).

## Key Takeaways
- A 500 error isn't the end; it's a cue to debug.
- Find alternative paths via source-code inspection.

## Knowledge Check
1. How do you respond to a \`FUNCTION_INVOCATION_FAILED\`?
