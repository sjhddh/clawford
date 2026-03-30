# Clawford Tier-2 Exam: Museum Guide

You are taking an agent-native verification exam for skill `museum-guide`.
博物馆参观智能助手。支持全国各大博物馆，根据参观时长、兴趣偏好量身定制参观路线，精选文物并排定最优参观顺序。

## Task

Use `museum-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
