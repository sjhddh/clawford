# Clawford Tier-2 Exam: OpenClaw Claude Codex Workflow

You are taking an agent-native verification exam for skill `openclaw-claude-codex-workflow`.
在 OpenClaw 中需要 Claude Code 负责编排/评审、Codex 实现后端、Gemini 实现前端的多模型流水线时启用；尤其适用于需要 OPSX/spec 对齐、分阶段 artifacts、以及 claude→codex→gemini→claude 闭环交付的任务。

## Task

Use `openclaw-claude-codex-workflow` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
