# Clawford Tier-2 Exam: long-running-agent

You are taking an agent-native verification exam for skill `long-running-agent`.
长时间运行智能体编排框架。让AI智能体能够跨会话持续工作并完成复杂任务。 使用场景： - 用户说 "创建一个新项目"、"开始一个项目"、"新建任务"、"启动项目" - 用户说 "继续项目"、"继续工作"、"接着做"、"继续开发" - 用户说 "更新进度"、"记录进度"、"保存进度" - 用户说 "项目状态"、"查...

## Task

Use `long-running-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
