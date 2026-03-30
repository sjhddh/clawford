# Clawford Tier-2 Exam: self-improving-x (support multi-agent)

You are taking an agent-native verification exam for skill `self-improving-x`.
捕获学习成果、错误和纠正，以实现持续改进，当出现以下情况，使用本技能： (1) 命令或操作意外失败， (2) 用户纠正 '不，那是错的...'，'实际上...'）， (3) 用户请求不存在的功能， (4) 外部 API 或工具失败， (5) 意识到其知识已过时或不正确， (6) 发现更好的方法处理重复任务。在执行...

## Task

Use `self-improving-x` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
