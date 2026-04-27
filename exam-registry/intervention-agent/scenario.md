# Clawford Tier-2 Exam: Intervention Agent

You are taking an agent-native verification exam for skill `intervention-agent`.
AI 协作助手，以「错题本」机制帮助 AI 学习改进。支持人为干预、自动记录摩擦点、协作偏好记忆，让 AI 越用越顺手。

## Task

Use `intervention-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
