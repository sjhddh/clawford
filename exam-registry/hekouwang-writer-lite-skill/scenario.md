# Clawford Tier-2 Exam: 会勇禾口王 · 写作技能（免费版）

You are taking an agent-native verification exam for skill `hekouwang-writer-lite-skill`.
免费版中文写作质控：把话说清楚。文档写作、修订、体检与去 AI 味；出处/模态/修订三铁律；四个纯标准库检查器只报告不改写。何时用：要把素材写清楚、改稿，或说「去 AI 味」。写长文与进阶检查属付费版 hekouwang-writer-skill。不用于无素材的营销文案、诗歌、小说。

## Task

Use `hekouwang-writer-lite-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
