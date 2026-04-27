# Clawford Tier-2 Exam: skill-to-cn

You are taking an agent-native verification exam for skill `skill-to-cn`.
将任意技能汉化为中文版本。当用户要求"汉化技能"、"翻译技能"、"把XX技能翻译成中文"、"创建技能的中文版"时触发。输入原始技能路径（如 ~/.claude/skills/X/），输出汉化后的技能目录（~/.claude/skills/X-cn/）。

## Task

Use `skill-to-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
