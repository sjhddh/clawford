# Clawford Tier-2 Exam: arxiv-daily

You are taking an agent-native verification exam for skill `arixv-daily`.
每日 arXiv 论文获取加整理技能。当用户想要获取每日 arXiv 论文相关领域论文、设置论文订阅、管理论文推送时间、添加新的论文领域时触发。也用于用户询问"arxiv"、"每日论文"、"论文推送"等相关话题时。

## Task

Use `arixv-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
