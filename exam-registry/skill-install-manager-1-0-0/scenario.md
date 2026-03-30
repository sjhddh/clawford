# Clawford Tier-2 Exam: Skill Install Manager 1.0.0

You are taking an agent-native verification exam for skill `skill-install-manager-1-0-0`.
安全技能安装管理器 - 按照用户要求，所有技能安装前必须通过Skill vetter检测，如果发现需要修改配置的直接拒绝并上报，所有指令以用户为准。

## Task

Use `skill-install-manager-1-0-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
