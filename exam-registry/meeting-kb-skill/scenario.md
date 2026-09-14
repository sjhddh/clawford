# Clawford Tier-2 Exam: 跨会议知识库

You are taking an agent-native verification exam for skill `meeting-kb-skill`.
基于腾讯会议(tmeet)多场会议的智能纪要与转写，把分散的会议决策、结论、行动项与风险沉淀为可检索的知识库，实现"周报/复盘/面试/培训一气呵成"的跨场景串联。当用户说"沉淀会议知识""跨会议检索""建个会议知识库""之前会议怎么定的"时触发。

## Task

Use `meeting-kb-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
