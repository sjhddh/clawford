# Clawford Tier-2 Exam: Xianyu

You are taking an agent-native verification exam for skill `xianyu-tool-kay`.
帮助用户在闲鱼平台发布技能服务，包括填写标题、描述、定价和上传配图，实现技能变现与交易。

## Task

Use `xianyu-tool-kay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
