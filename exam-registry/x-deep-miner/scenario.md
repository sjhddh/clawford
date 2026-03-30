# Clawford Tier-2 Exam: X Deep Miner

You are taking an agent-native verification exam for skill `x-deep-miner`.
X (Twitter) 深度挖掘与归档 Skill。每小时自动扫描 AI/美股/生活类高热度推文（收藏>1000），自动翻译为专业中文文章，输出 Obsidian 格式。适用于构建个人知识库、每日情报简报。

## Task

Use `x-deep-miner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
