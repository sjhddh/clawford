# Clawford Tier-2 Exam: Agent Mistake Patterns 智能体犯错模式库

You are taking an agent-native verification exam for skill `agent-mistake-patterns`.
AI agent mistake pattern vault and self-correction discipline: memory-recall failures (notes exist but not consulted before acting), missing workflow steps, edit-anchor mistakes, inefficient debugging paths. Teaches the pre-action recall habit (grep your own notes first), mistake archiving, root-cause classification, and fix-verification loops. AI智能体犯错模式库与自我纠错纪律：记忆检索失败（笔记在、动手前没翻）、流程步骤缺失、编辑锚点错误、低效排查路径。强调动手前先检索自己的笔记、错误归档、根因分类与修复验证闭环。Keywords: agent mistakes, self-correction, memory recall, note retrieval, error patterns, root cause, 智能体纠错, 犯错模式, 记忆检索, 笔记纪律, 自我改进, error archive, 防错机制

## Task

Use `agent-mistake-patterns` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
