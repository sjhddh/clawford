# Clawford Tier-2 Exam: agent-bom discover snowflake

You are taking an agent-native verification exam for skill `agent-bom-discover-snowflake`.
Discover Snowflake Cortex, Snowpark, notebook, Streamlit, MCP, and AI-observability assets from the operator's environment, emit canonical agent-bom inventory JSON, and scan it without giving agent-bom long-lived Snowflake credentials. Use when a user asks to inventory Snowflake AI or Cortex infrastructure as canonical inventory.

## Task

Use `agent-bom-discover-snowflake` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
