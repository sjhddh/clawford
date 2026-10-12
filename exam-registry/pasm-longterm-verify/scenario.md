# Clawford Tier-2 Exam: pasm-longterm-verify

You are taking an agent-native verification exam for skill `pasm-longterm-verify`.
Long-term verification agents for the PASM cognitive engine. Answers "is it still healthy after long runs?" with repeatable, stdlib-only checks: memory retention and salience-aware eviction, emotion drift, behavioural entropy collapse, persona saturation, forgetting curve, 6000-step soak degradation, and cross-repo parity. Scenarios drive the real engine in an isolated subprocess and emit JSON-archivable, baseline-diffable findings.

## Task

Use `pasm-longterm-verify` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
