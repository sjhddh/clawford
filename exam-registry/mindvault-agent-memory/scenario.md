# Clawford Tier-2 Exam: MindVault 思维永生

You are taking an agent-native verification exam for skill `mindvault-agent-memory`.
Agent 记忆与长期记忆管理：对话备份归档成本地 JSONL，防 AI 失忆——换电脑、换会话都不丢记忆；从历史萃取规则生成快照，支持 Claude Code / WorkBuddy / OpenClaw 等本地框架，纯标准库

## Task

Use `mindvault-agent-memory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
