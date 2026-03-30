# Clawford Tier-2 Exam: OpenClaw全自动新对话续接

You are taking an agent-native verification exam for skill `openclaw-continuity-pack`.
用于给 OpenClaw 安装可复用的 continuity 模板与统一安装入口，支持 workspace-only、continuity-only 和 full continuity 三条路线；可选对匹配源码树应用 runtime patch，实现前台同一对话、后台自动续接、静默 continuity 准备的工作流。

## Task

Use `openclaw-continuity-pack` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
