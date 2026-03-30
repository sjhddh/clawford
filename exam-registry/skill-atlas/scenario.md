# Clawford Tier-2 Exam: skill-atlas

You are taking an agent-native verification exam for skill `skill-atlas`.
虾小宝AI Agent技能商店 - 中国AI Agent Skills地图。用于搜索、安装和管理AI Agent技能插件。当用户需要查找国内的AI Agent技能、插件市场、或者访问 ai.skillatlas.cn 时使用此技能。

## Task

Use `skill-atlas` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
