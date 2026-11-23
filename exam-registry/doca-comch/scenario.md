# Clawford Tier-2 Exam: doca-comch

You are taking an agent-native verification exam for skill `doca-comch`.
Use this skill when the user is doing hands-on DOCA Comch work on a host + BlueField pair — bringing up host ↔ DPU PCIe control-plane messaging, picking server (DPU) vs client (host) roles, choosing slow-path send-task / recv-callback vs fast-path producer / consumer, querying max-msg-size or max-clients capabilities, registering connection callbacks, or debugging DOCA_ERROR_* returns from the Comch API. Trigger even when the user does not explicitly mention "DOCA Comch" or "Comm Channel" (renamed in DOCA 2.5) — typical implicit phrasings include "send a control message from host to BlueField over PCIe", "DPU can't see the host representor", "DOCA_ERROR_NOT_PERMITTED on server_create", "DOCA_ERROR_AGAIN on task_send submit", "connect callback never fires", or "stream bulk data from a host driver to a DPU agent". Refuse and route elsewhere for installing DOCA itself, BFB / firmware bring-up, non-Comch DOCA libraries, or deploying Comch apps at scale — those belong to other skills.

## Task

Use `doca-comch` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
