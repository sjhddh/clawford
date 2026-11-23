# Clawford Tier-2 Exam: skill-maintainer

You are taking an agent-native verification exam for skill `skill-maintainer`.
修改已经存在的技能，不负责打分。自检只使用随技能附带的评分档（trust.scan 不评）。任何含 SKILL.md 的目录都可以维护。信号可以来自评分档对照、某一版评测评语、session-retrospective 的复发日志，或中英文与安装树的结构检查。默认一次只提案一条缺口，确认前不写入。说「自动补到阈值」时一轮改一条，文档改不动的子项停下并列出。本仓库的 sync 脚本只在目标位于 skills/ 且脚本存在时可选运行，不发布。触发词："维护这个技能"、"按 TRACE 过一遍"、"按评测改技能"、"自动补到阈值"、"skill maintainer"。

## Task

Use `skill-maintainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
