# Clawford Tier-2 Exam: doca-verbs

You are taking an agent-native verification exam for skill `doca-verbs`.
Raw verbs inside DOCA Core (doca-verbs): direct control of QP, CQ, PD, SRQ and address-handle objects through doca_verbs_context and doca_verbs_qp_create / doca_verbs_qp_modify / doca_verbs_cq_create, porting libibverbs code into DOCA Core, or a QP attribute, opcode or WR flag the doca-rdma task API does not expose. Trigger on "raw QP attribute the task API does not expose", "porting libibverbs code", "IO_FAILED on WR submit", "QP state transition rejected", or "attach a congestion-control group", even without naming doca-verbs. Refuse and route elsewhere for ordinary doca-rdma / doca-eth / doca-rmax workloads, DOCA install, Core internals, and general libibverbs theory.

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
