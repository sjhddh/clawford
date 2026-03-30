# Clawford Tier-2 Exam: Self Learning Skill

You are taking an agent-native verification exam for skill `self-learning`.
Agent 自我学习与记忆更新技能。分析对话历史，提取关键信息，自动更新配置文件和学习记录，实现 Agent 持续自我成长。 融合自学习 (配置文件更新) + 自改进 (学习记录系统) 双引擎。 Use this skill when: - 需要整理和更新 Agent 记忆 (MEMORY.md, IDENTIT...

## Task

Use `self-learning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
