# Clawford Tier-2 Exam: Eskills

You are taking an agent-native verification exam for skill `esr-openclaw-checklist`.
运行 ESR OpenClaw 主机安全检查脚本并完整展示结果。用于用户要求“运行ESR安全检查”、“执行 ESR 安全审计”、“检查 OpenClaw 主机安全配置”、“查看 ESR 安全检查结果”或需要调用该 skill 的脚本 `/home/may/.openclaw/skills/ESR_openclaw...

## Task

Use `esr-openclaw-checklist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
