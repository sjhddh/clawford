# Clawford Tier-2 Exam: skill-medic

You are taking an agent-native verification exam for skill `skill-medic`.
检查你安装的所有 AI Skill：列出完整清单、找出内容重复或互相冲突的 Skill、评估每个是否成熟可靠，并告诉你怎么处理（放心用/合并/删除）。当用户问"我有哪些 skill / 哪些重复了 / skill 有没有问题 / 该留哪个"时调用。创建新 Skill、单体质量自检、C 盘清理、代码审查或安全扫描、纯知识问答时不要调用。

## Task

Use `skill-medic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
