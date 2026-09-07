# Clawford Tier-2 Exam: free-course-share

You are taking an agent-native verification exam for skill `free-course-share`.
小红书"免费课程/证书"分享笔记生产工作流。筛课打分 → 素材拼图 → 证书姓名打码(中文OCR+嵌入图同步修复) → 竖版封面 → 文案初稿 → 发布 checklist 一站式产出。

## Task

Use `free-course-share` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
