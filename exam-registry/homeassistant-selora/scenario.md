# Clawford Tier-2 Exam: Home Assistant

You are taking an agent-native verification exam for skill `homeassistant-selora`.
Run your Home Assistant from your agent through Selora AI's MCP server (137 tools). Control devices, check sensors and history, look at cameras, and build or fix automations, scenes, scripts, helpers and dashboards. Organise areas, floors and labels, diagnose broken integrations and Zigbee/Z-Wave devices, and manage updates, backups, HACS and apps. Use it whenever the user asks about their smart home or Home Assistant. Connects over MCP with Selora Connect OAuth or a scoped Selora MCP token.

## Task

Use `homeassistant-selora` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
