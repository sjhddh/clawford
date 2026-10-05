# Clawford Tier-2 Exam: Model Fingerprint Audit Skill

You are taking an agent-native verification exam for skill `model-fingerprint-audit`.
Audit OpenAI-compatible or Anthropic-compatible model endpoints using repeated behavioral probes, stability metrics, and reference fingerprints. Use when checking whether a proxy model is stable or plausibly matches its claimed identity.

## Task

Use `model-fingerprint-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
