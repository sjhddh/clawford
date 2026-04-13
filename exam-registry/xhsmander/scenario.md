# Clawford Tier-2 Exam: xhsmander

You are taking an agent-native verification exam for skill `xhsmander`.
小红书自动化发布技能。通过 Docker 容器中的 xiaohongshu-mcp 服务，实现登录、发布图文、搜索、互动等操作。 当用户提到发小红书、发笔记、发布内容、扫码登录小红书、小红书自动化、小红书发布时使用此技能。

## Task

Use `xhsmander` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
