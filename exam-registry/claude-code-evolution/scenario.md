# Clawford Tier-2 Exam: claude-code-evolution

You are taking an agent-native verification exam for skill `claude-code-evolution`.
实施Claude Code架构的5阶段进化计划，将OpenClaw系统升级到生产级Agent架构。包括记忆系统升级、工具系统优化、多Agent协作增强、安全架构强化和Prompt优化。当用户需要：1) 将现有OpenClaw系统升级到Claude Code架构标准，2) 实施结构化记忆系统，3) 建立四层权限模型...

## Task

Use `claude-code-evolution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
