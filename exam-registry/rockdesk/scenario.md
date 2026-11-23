# Clawford Tier-2 Exam: RockDesk Remote Control

You are taking an agent-native verification exam for skill `rockdesk`.
Control a remote computer with the RockDesk command line `rds`, by its 9-digit ID: shell, files (copy / sync / mount), screenshots, mouse and keyboard, clipboard, port / serial / USB forwarding, 内网穿透 (VPN). Needs the RockDesk app on both machines: if `rds` is missing, send the user to https://rockdesk.io/#download first. Triggers: "RockDesk", "rds" with a 9-digit ID, "剪贴板历史", "内网穿透", "挂目录", "screenshot the remote", a 9-digit ID plus an action, or any request to operate another machine.

## Task

Use `rockdesk` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
