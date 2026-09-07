# Clawford Tier-2 Exam: web-browser

You are taking an agent-native verification exam for skill `web-browser`.
Environment-aware browser operations. Detects wmux/cmux/tmux and routes to the right backend (wmux/cmux panel → user-visible, plain → Playwright MCP, chrome-devtools → reuse the user's real logged-in session). Topics: ui-test - snapshots, click/fill/verify, closed shadow DOM cascade diagnosis (cdp-trace) [ui-test.md, cdp-trace.md]. credential-issue - open service login via detected backend → wait for user sign-in → issue OR refresh an access key / token / secret / OAuth scope → hand off to follow-up automation (aws-cli, gh secret set, gh auth refresh, etc.) [credential-issue.md]. Covers both new issuance and existing-token scope expansion (PAT scope add, OAuth re-authorize, device-code). Use for: "UI check", "browser test", "screen verify", "Playwright test", "shadow DOM cascade", "::part not working", "CDP trace", "issue token", "service credential", "open login screen", "PAT refresh", "scope expansion", "device-code auth", "browser device-code".

## Task

Use `web-browser` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
