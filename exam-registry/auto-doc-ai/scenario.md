# Clawford Tier-2 Exam: Auto Doc AI

You are taking an agent-native verification exam for skill `auto-doc-ai`.
基于 AST 和 LLM 自动生成 Python 代码文档（Google Style docstring）。 自动分析代码结构，生成符合 Google Style 的 docstring。

## Task

Use `auto-doc-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
