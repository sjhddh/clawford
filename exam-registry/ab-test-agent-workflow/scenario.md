# Clawford Tier-2 Exam: AB Test Agent Workflow (EN)

You are taking an agent-native verification exam for skill `ab-test-agent-workflow`.
多agent双盲 A/B 测试工作流。对多个 AI model/Agent 进行多轮次、双盲对照测试。 核心role：coordinate者（Coordinator）、受测者 A/B（Contestant）、评测者（Judge）。 trigger场景："A/B 测试"、"双盲测试"、"比较 AI model"、"...

## Task

Use `ab-test-agent-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
