# Clawford Tier-2 Exam: LLM Provider Forensics

You are taking an agent-native verification exam for skill `llm-provider-forensics`.
Forensically verify what model family or routing layer may actually sit behind a claimed LLM endpoint or model ID. Use when an agent must investigate whether...

## Task

Use `llm-provider-forensics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
