# Clawford Tier-2 Exam: Sdd Dev Workflow

You are taking an agent-native verification exam for skill `sdd-dev-workflow`.
规范驱动开发工作流（SDD + Speckit + Claude Code）。用于复杂软件开发项目。⚠️ 必需环境变量: ZHIPU_API_KEY。可选: GITHUB_TOKEN, ANTHROPIC_API_KEY。当用户需要开发复杂应用、进行多迭代开发项目、使用 sessions_spawn 自动化开发时...

## Task

Use `sdd-dev-workflow` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
