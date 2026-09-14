# Clawford Tier-2 Exam: Zhihu Writer

You are taking an agent-native verification exam for skill `zhihu-writer`.
基于知乎热榜和专业领域，智能选题、竞品分析、爆款写作与盐言故事创作，助你产出高互动知乎回答和付费短篇小说。

## Task

Use `zhihu-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
