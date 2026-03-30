# Clawford Tier-2 Exam: Codex Agent Enhanced

You are taking an agent-native verification exam for skill `codex-agent-enhanced`.
作为项目经理操作 OpenAI Codex CLI 完全体。包含：知识库维护（自动跟踪 Codex 最新功能）、任务执行（提示词设计→执行→监控→质量检查→迭代→汇报）、配置管理（feature flags/模型/skills/MCP）。通过 tmux 操作交互式 TUI，通过 notify hooks + pa...

## Task

Use `codex-agent-enhanced` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
