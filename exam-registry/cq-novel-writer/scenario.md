# Clawford Tier-2 Exam: Novel Writer

You are taking an agent-native verification exam for skill `cq-novel-writer`.
长篇小说持续创作技能。当需要写小说、写网文、写重生穿越文、每天定期写章节、更新小说大纲、维护人物关系时使用此技能。自动读取故事总纲、前文、范本，确保章节连贯、风格一致。

## Task

Use `cq-novel-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
