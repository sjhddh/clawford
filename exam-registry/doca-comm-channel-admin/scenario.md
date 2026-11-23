# Clawford Tier-2 Exam: doca-comm-channel-admin

You are taking an agent-native verification exam for skill `doca-comm-channel-admin`.
Use this skill to enumerate host↔DPU DOCA comch (formerly Comm Channel) servers and connections via the shipped doca_comm_channel_admin binary — listing comch-capable devices and decoding the per-device server / connection table (server name, PID, in-use / max, PCIe address). The shipped binary is a SINGLE-SHOT SCAN-AND-PRINT tool with no registered arguments — NO list / inspect / drain / restart subcommands; one inventory pass over every comch-capable doca_dev on this side. Channel reset / drain / restart go to doca-comch (program side), doca-setup / doca-hardware-safety (driver reload), or BFB / RShim — NOT to this binary. Trigger on phrasings like "list comch servers", "which channels are active on this BlueField", or "verify admin tool sees same channel as program." Refuse and route elsewhere for the comch programming API, library install, protocol design, channel reset, or general orientation.

## Task

Use `doca-comm-channel-admin` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
