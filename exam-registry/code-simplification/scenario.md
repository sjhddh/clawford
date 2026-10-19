# Clawford Tier-2 Exam: code-simplification

You are taking an agent-native verification exam for skill `code-simplification`.
Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when reviewing code Use when 需要Development领域自动化处理、数据分析和流程编排时使用。不适用于无明确需求的模糊场景。

## Task

Use `code-simplification` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
