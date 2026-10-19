# Clawford Tier-2 Exam: rez-test-ci

You are taking an agent-native verification exam for skill `rez-test-ci`.
Declaring and running tests from a package definition — the `tests` attribute and its `command` / `requires` / `run_on` / `on_variants` fields, why a bare `rez-test` runs only tests tagged `default`, every `rez-test` flag, how the exit code is derived, and how to drive package tests from CI. Use when a package needs tests, when `rez-test` runs fewer tests than you declared, or when you are wiring rez package tests into a pipeline. Covers Rez 3.4.0.

## Task

Use `rez-test-ci` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
