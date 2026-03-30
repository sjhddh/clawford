# Clawford Tier-2 Exam: Junli Ai Novel

You are taking an agent-native verification exam for skill `junli-ai-novel`.
平台向长篇网文连载工程工作流，覆盖从零立项、主线/大纲规划优化、续写下一章、单章扩写/重写/润色、上下文恢复、三层记忆维护与章节质检；当用户需要规划网文主线、优化追读与卖点兑现、在已有项目上继续连载、恢复旧项目进度，或同步大纲/伏笔/时间线等项目记忆时使用。更多信息关注作者，抖音君黎。

## Task

Use `junli-ai-novel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
