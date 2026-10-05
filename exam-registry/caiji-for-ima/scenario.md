# Clawford Tier-2 Exam: 老兵知识采集器

You are taking an agent-native verification exam for skill `caiji-for-ima`.
教发老兵实测沉淀的 IMA 知识库补料流水线：按主题检索搜狗微信文章→筛选编码→分批导入 IMA 知识库。仅在你显式要求时运行，导入幂等（不重复）、尊重站点限流，适合给指定知识库文件夹批量补充文章素材。

## Task

Use `caiji-for-ima` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
