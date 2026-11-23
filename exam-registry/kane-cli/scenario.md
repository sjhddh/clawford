# Clawford Tier-2 Exam: Kane CLI by TestMu AI

You are taking an agent-native verification exam for skill `kane-cli`.
End-to-end (E2E) test generation and execution with KaneCLI. Generate tests from a PRD, specification, or user-provided description via the assurance commands (use-cases, acceptance criteria, scenarios, runnable _test.md tests; never write test cases by hand). Execute them on desktop web (Chrome, the default), Android and iOS: emulator/simulator locally on macOS Apple Silicon or via testrun run --remote, and real cloud devices from any machine (--target android|ios). Prove coverage with evidence packs and kane-cli cover, and judge a pack against a policy of quality gates (kane-cli evidence verdict, --policy) to pass or fail a CI run. Work in a team's shared Test Manager project from a linked folder: link it with --project, save sessions, run the designed tests on their Test Manager cases, and read the project's coverage. Use for any task needing a real browser or mobile app: navigation, clicks, form filling, UI checks, screenshots, deploy verification. Parse NDJSON output, inspect logs, and save replayable _test.md files. Share a local assurance store (.context/) through a GitHub repository, S3-compatible bucket, or folder via kane-cli context sync, and resolve decisions requested during a sync rebase.

## Task

Use `kane-cli` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
