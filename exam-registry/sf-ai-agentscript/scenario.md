# Clawford Tier-2 Exam: Salesforce AI Agent Script

You are taking an agent-native verification exam for skill `sf-ai-agentscript`.
Agent Script DSL for deterministic Agentforce agents. TRIGGER when: user writes or edits .agent files, builds FSM-based agents, uses Agent Script CLI (sf age...

## Task

Use `sf-ai-agentscript` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
