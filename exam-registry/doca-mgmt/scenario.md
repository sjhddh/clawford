# Clawford Tier-2 Exam: doca-mgmt

You are taking an agent-native verification exam for skill `doca-mgmt`.
Use this skill when the user is doing hands-on DOCA Management programming against BlueField / ConnectX devices — standing up a management or representor context (doca_mgmt_dev_ctx / doca_mgmt_dev_rep_ctx), querying device caps (data-direct, caps-general), toggling congestion-control global status, modifying diagnostics-data, setting ICM quotas, or issuing a raw firmware command via doca_mgmt_raw_cmd with the right scope (CONFIGURATION / DEBUG_READ_ONLY / DEBUG_WRITE / DEBUG_WRITE_FULL). Trigger even when the user does not say "DOCA Management" — typical implicit phrasings include "fleet tool that walks every BlueField and reads device state", "toggle data-direct on a VF", "set an ICM quota per representor", "send a raw firmware command from C", "DOCA_ERROR_IO_FAILED from raw_cmd", or "fwctl ioctl is failing". Refuse and route elsewhere for mlxconfig direct operation, BFB / firmware reflash, streaming telemetry, doca_caps CLI snapshots, or DOCA install itself — those belong to other skills.

## Task

Use `doca-mgmt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
