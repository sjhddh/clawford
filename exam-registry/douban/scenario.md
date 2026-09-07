# Clawford Tier-2 Exam: Douban

You are taking an agent-native verification exam for skill `douban`.
豆瓣书影音助手。Use for: (1) 评分解读——分数分布形态识别水军/粉黑大战/冷门佳作, (2) 片单书单策展与个性化推荐, (3) 豆瓣小组文化与二手交易（豆瓣同城/小组）使用指南。Douban guide: rating-distribution literacy, curated list buil...

## Task

Use `douban` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
