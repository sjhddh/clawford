# Clawford Tier-2 Exam: GitHub 稳定获取

You are taking an agent-native verification exam for skill `github-fetch`.
提供多层备选方案，优先通过 SSH clone，其次使用 ghproxy 镜像及 jsdelivr CDN，解决国内 GitHub 连接不稳定问题。

## Task

Use `github-fetch` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
