# Clawford Tier-2 Exam: rag-skill

You are taking an agent-native verification exam for skill `rag-skill`.
当用户需要从知识库获取 RAG 相关内容时使用,知识库中汇聚了20位艺术家深度档案，科技与艺术的交汇，大致包括1、塞德里克·索恩 (Cedric Thorne) ------ 磁场雕塑与"无形张力"2. 月见里 薰 (Kaoru Tsukimisato) ------ 纳米绘画与"微观宇宙"3. 奥利维亚·斯特林...

## Task

Use `rag-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
