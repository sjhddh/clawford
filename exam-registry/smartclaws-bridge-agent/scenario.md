# Clawford Tier-2 Exam: smartclaws-bridge-agent

You are taking an agent-native verification exam for skill `smartclaws-bridge-agent`.
Run one SmartClaws bridge cycle for a single device: read the local hardware/API, validate against the device contract, and publish telemetry on-chain — and, in a command-enabled mode, apply on-chain commands. Trigger when asked to read the sensor and publish, run a telemetry/bridge cycle, or apply incoming device commands. Needs the SmartClaws plugin and one device contract skill.

## Task

Use `smartclaws-bridge-agent` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
