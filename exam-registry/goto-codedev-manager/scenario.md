# Clawford Tier-2 Exam: GoTo CodeDev Manager

You are taking an agent-native verification exam for skill `goto-codedev-manager`.
多 IDE / 多 AI 编程 Agent 统一调度 Skill，连接 Codex/Claude Code/QoerCN(Lingma 兼容)/Trae/VS Code/Cursor/Qoder 完成代码开发、Git Diff 分析、EF Core 实体识别、Migration 生成、数据库变更交接单产出、测试构...

## Task

Use `goto-codedev-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
