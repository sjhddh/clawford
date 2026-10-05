# Clawford Tier-2 Exam: Llm Wiki

You are taking an agent-native verification exam for skill `llm-wiki-2`.
基于增量维护的结构化 Markdown wiki，帮助持续摄入、组织、查询和检查知识库内容与逻辑一致性。

## Task

Use `llm-wiki-2` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
