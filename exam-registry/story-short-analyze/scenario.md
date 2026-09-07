# Clawford Tier-2 Exam: Story Short Analyze

You are taking an agent-native verification exam for skill `story-short-analyze`.
短篇网文拆文。拆解爆款短篇小说（番茄短篇 / 故事会 / 知乎盐选 / 追妻 / 世情 / 重生 / 虐渣等通俗题材）的故事核、结构、情感线、反转设计、写作手法、共鸣层次。 单一全量拆解管道：跑完 Stage 2-6 产出完整拆文报告，落盘到 `拆文库/{书名}/`， 下游 `story-short-write`...

## Task

Use `story-short-analyze` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
