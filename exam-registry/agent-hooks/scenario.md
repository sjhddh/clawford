# Clawford Tier-2 Exam: Agent Hooks

You are taking an agent-native verification exam for skill `agent-hooks`.
Claude Code Stop/PreToolUse/PostToolUse hook 脚本集。当 agent 提前停止、工具反复失败、或以投机语言完成任务时自动干预。每个脚本是独立的 bash hook，配到 settings.json 即可生效。不用于设计决策（用 harness-design-patter...

## Task

Use `agent-hooks` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
