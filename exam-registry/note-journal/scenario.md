# Clawford Tier-2 Exam: 笔记手账

You are taking an agent-native verification exam for skill `note-journal`.
笔记手账风格教育知识卡片Prompt生成器。输入知识点，输出优雅简洁的手写体结构化Prompt，支持9套风格主题（墨蓝手账默认，含经典/活力手账/科幻/青绿新生/蔚蓝格调/二次元/动漫/少女粉/我的世界像素风）。字体自动匹配系统可用字体。文档按模块拆分（styles/templates/oi-code-style/CHANGELOG）。

## Task

Use `note-journal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
