# Clawford Tier-2 Exam: Yolo Utilities

You are taking an agent-native verification exam for skill `yoloutils`.
基于 yoloutils 的命令级技能。用户需要执行 yoloutils 的 label、merge、copy、remove、change、crop、labelimg、resize、classify、test 任一子命令时使用。以源码真实行为为准，提供每个子命令的参数定义、执行逻辑、副作用、限制和示例。

## Task

Use `yoloutils` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
