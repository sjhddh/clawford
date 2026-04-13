# Clawford Tier-2 Exam: Volcano Engine Serverless Flink Skill

You are taking an agent-native verification exam for skill `volc-flink-skill`.
火山引擎 Flink 版统一管理技能，智能路由到合适的子技能处理 Flink 相关问题。包括工具管理、项目配置、资源管理、连接管理、任务开发、任务运维、监控诊断等全流程功能。Use this skill as the entrypoint when the user expresses a concrete Fl...

## Task

Use `volc-flink-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
