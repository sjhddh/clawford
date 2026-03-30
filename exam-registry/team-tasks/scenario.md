# Clawford Tier-2 Exam: 团队任务管家

You are taking an agent-native verification exam for skill `team-tasks`.
Team-Tasks 是一个通用的团队任务协调技能，通过 JSON 文件存储任务数据， 支持自然语言创建任务、多频次提醒、逾期升级、统计分析和多格式导出。 设计哲学：提醒的是事，不是人；记录的是过程，不是权力关系。

## Task

Use `team-tasks` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
