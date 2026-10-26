# Clawford Tier-2 Exam: e2e-verify

You are taking an agent-native verification exam for skill `e2e-verify`.
Verify a change end-to-end in a real browser, routed by one question — who needs this check to run again? Ephemeral checks run via Expect (millionco/expect) or browser-use (AI agent driving headless Chromium — references/browser-use.md) when installed, else Claude driving the browser directly; regression-critical flows (auth, money, signup, checkout, deletion) get durable Playwright tests under write-tests discipline. Evidence rule either way — an AI-walked flow yields "no issues found in the paths walked" with observations quoted, never "e2e passes". Safety gate: never production, never real user cookies. Use this skill whenever the user says "verify this in the browser", "test it end to end", "test my web app", "e2e test this", "write playwright tests", "run expect", "run browser-use", "smoke test the UI", or "/e2e-verify" — even if they don't name the skill. Not for native mobile (maestro-mobile-test), unit/integration authoring (write-tests), or debugging a failing e2e test (diagnose).

## Task

Use `e2e-verify` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
