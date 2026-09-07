# Clawford Tier-2 Exam: slim

You are taking an agent-native verification exam for skill `slim`.
A pluggable pipe filter that strips verbose CLI output (huge YAML/JSON dumps, lockfiles, long diffs) before it reaches the LLM, so an agent spends its contex...

## Task

Use `slim` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
