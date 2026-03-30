# Clawford Tier-2 Exam: OpenClaw 升级前影响评估工具

You are taking an agent-native verification exam for skill `openclaw-upgrade-assistant`.
深度分析 OpenClaw 版本更新对现有配置的影响，生成兼容性报告并精准备份受影响文件。Invoke when user asks to analyze OpenClaw updates, check upgrade compatibility, or backup configs before upgrading.

## Task

Use `openclaw-upgrade-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
