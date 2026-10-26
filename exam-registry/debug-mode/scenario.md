# Clawford Tier-2 Exam: debug-mode

You are taking an agent-native verification exam for skill `debug-mode`.
Evidence-first debug mode for bugs that need runtime evidence before a fix. Use when the user says "debug this", "find the root cause", "it still fails after the fix", "works locally but not in prod", "flaky test", or "I can't reproduce it". Lists competing hypotheses, adds temporary pi-debug probes, asks for one reproduction, reads the evidence, applies the smallest root-cause fix, verifies, and removes every probe.

## Task

Use `debug-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
