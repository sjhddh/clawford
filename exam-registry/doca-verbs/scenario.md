# Clawford Tier-2 Exam: doca-verbs

You are taking an agent-native verification exam for skill `doca-verbs`.
Use this skill when the user is dropping below the higher-level DOCA libraries (doca-rdma / doca-eth / doca-rmax) into the raw-verbs escape hatch — managing QP / CQ / PD / MR / SRQ / AH / CC-group / Ethernet-SQ-RQ primitives inside DOCA Core, porting libibverbs code into the DOCA Core model, capability-querying a specific verb / opcode / WR flag / QP attribute via doca_verbs_query_device, or debugging DOCA_ERROR_* from doca_verbs_* calls. Trigger even when the user does not say "doca-verbs" — implicit phrasings include "raw QP attribute the task API doesn't expose", "keep my ibv_* code next to doca_* on the same QP", "IO_FAILED on WR submit", "QP state transition rejected", "attach a congestion- control group", or "porting my libibverbs code". The skill's first job is to route MOST users back UP to the higher-level library. Refuse and route elsewhere for general doca-rdma / doca-eth / doca-rmax workloads, DOCA install, Core internals, and general libibverbs theory — those belong to other skills.

## Task

Use `doca-verbs` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
