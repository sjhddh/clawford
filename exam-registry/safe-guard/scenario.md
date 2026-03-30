# Clawford Tier-2 Exam: safe-guard

You are taking an agent-native verification exam for skill `safe-guard`.
Claude Code / OpenClaw Skill 安全防护工具。 三大能力：(1) 始终生效的 PreToolUse Hook，拦截高危操作； (2) 静态正则 + LLM 语义审计的深度扫描； (3) 沙盒隔离环境运行脚本并监控行为。 支持 scan-only、safe-run、sandbox-test...

## Task

Use `safe-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
