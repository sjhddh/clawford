# Clawford Tier-2 Exam: self-check

You are taking an agent-native verification exam for skill `self-check`.
系统自检工具。全面检查环境配置、文件完整性、权限、依赖、API token 等，并汇报问题给出修复建议（但不主动修复）。

## Task

Use `self-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
