# Clawford Tier-2 Exam: novel-writing

You are taking an agent-native verification exam for skill `novel-writing`.
AI长篇网文创作技能包。用于解决长篇网络小说创作中的核心痛点：上下文丢失、文风不一致、设定冲突、节奏失控、多线混乱、质量不稳、读者反馈无法内化。触发场景包括：开始新书、规划大纲、撰写章节、管理伏笔、检测冲突、读者反馈分析、批量创作质量控制。

## Task

Use `novel-writing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
