# Clawford Tier-2 Exam: plate

You are taking an agent-native verification exam for skill `plate`.
Use before any prose artifact goes public - a blog post, social post, README section, PR or issue body, commit message, release notes - to scrub identity and infrastructure leaks and apply writing conventions. Also use when the user asks to "scrub this", "is this safe to post", or "clean this up before it goes out". For repo and git-history leak scans use publish-readiness instead.

## Task

Use `plate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
