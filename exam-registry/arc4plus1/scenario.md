# Clawford Tier-2 Exam: 4+1架构视图自动生成器

You are taking an agent-native verification exam for skill `arc4plus1`.
软件架构4+1视图自动生成器。当用户表达"生成架构视图"、"4+1视图"、"软件架构分析"、"4+1架构视图"、"软件架构文档"、"架构4+1"或类似表达时触发此技能。给定代码文件或工程目录，自动分析并生成 5 个视图（逻辑/过程/物理/开发/场景）+ README 文档，全部使用 Mermaid 图渲染。

## Task

Use `arc4plus1` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
