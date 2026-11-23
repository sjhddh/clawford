# Clawford Tier-2 Exam: agent-rule-enforcement

You are taking an agent-native verification exam for skill `agent-rule-enforcement`.
Audit whether an agent's written rules are actually enforceable: classify each rule as interception, exit gate, detection, or prompt-only, compute blocking coverage, and run behavioral checks over event logs. Use when a rulebook has grown, when someone asks whether rules are really followed, or after changing agent instructions. Tool-agnostic; works on Markdown rules and JSONL event logs.

## Task

Use `agent-rule-enforcement` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
