# Clawford Tier-2 Exam: Mobile MVI

You are taking an agent-native verification exam for skill `mobile-mvi`.
Designs, implements and tests screens with MVI on Android, iOS and Flutter: intents as sealed types, one immutable state, a pure reducer and side effects fed back as actions, using Kotlin StateFlow stores, Swift @Observable stores (TCA as an option) and Dart Bloc or Cubit. Use for screens with many interacting events, debounced search or racing requests, or when adopting or reviewing Bloc or Redux-style code.

## Task

Use `mobile-mvi` to investigate a concrete query and produce an evidence-backed report at `artifacts/mobile-mvi-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mobile-mvi-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
