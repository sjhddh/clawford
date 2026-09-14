# Clawford Tier-2 Exam: 多Agent协作小说创作系统

You are taking an agent-native verification exam for skill `novel-writer-team`.
多Agent协作的小说创作系统。当用户想写小说、创作故事、写网文、写网络小说、写短篇/中篇/长篇小说时使用此技能。即使用户只是模糊地说"我有个想法想写下来"、"帮我构思一个故事"、"想写个XX类型的小说"，也应该触发。支持起点中文网、番茄小说、晋江文学城、知乎盐选、豆瓣阅读5大平台风格适配。8个专业角色协作，覆盖...

## Task

Use `novel-writer-team` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
