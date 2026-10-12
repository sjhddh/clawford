# Clawford Tier-2 Exam: 专利撰写 · PatentMax

You are taking an agent-native verification exam for skill `patent-writing-cn`.
根据用户提供的研发材料、技术方案或想法，自动生成包含技术方案、附图、权利要求等内容的专利初稿Word文档，支持中文。

## Task

Use `patent-writing-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
