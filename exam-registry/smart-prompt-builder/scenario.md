# Clawford Tier-2 Exam: Smart Prompt Builder

You are taking an agent-native verification exam for skill `smart-prompt-builder`.
智能提示构建器 - 根据语料库检索结果生成优化的写作提示。当需要为小说创作场景生成结构化提示词时使用，支持描写/对话/动作/情感 4 种场景类型，可注入 Voice Profile 和上下文信息。

## Task

Use `smart-prompt-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
