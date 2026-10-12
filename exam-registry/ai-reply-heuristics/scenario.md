# Clawford Tier-2 Exam: ai-reply-heuristics

You are taking an agent-native verification exam for skill `ai-reply-heuristics`.
ai-reply-heuristics — 启发式估计一段文字的 AI 痕迹强度：套话密度/破折号频率/句长均匀度/排比结构 → 0-100 分与三档区间（启发式，不构成判定，附免责）。

## Task

Use `ai-reply-heuristics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
