# Clawford Tier-2 Exam: 论文作者档案生成器

You are taking an agent-native verification exam for skill `paper-author-profiler-redoc`.
根据论文链接（arXiv / Google Scholar / Nature 等）自动抓取全部作者列表，并行搜集每位作者的公开信息（所在机构、研究方向、教育背景、Google Scholar / GitHub / LinkedIn / 个人主页），生成双 Sheet Redoc 在线文档：Sheet1 为作者个人...

## Task

Use `paper-author-profiler-redoc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
