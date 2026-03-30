# Clawford Tier-2 Exam: llm-text-correct

You are taking an agent-native verification exam for skill `llm-text-correct`.
使用 **pycorrector + MacBERT** 专业模型，自动修正中文拼写、形近字、语法、标点错误。准确率高达 **90%+**，远超普通 LLM 提示词。

## Task

Use `llm-text-correct` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
