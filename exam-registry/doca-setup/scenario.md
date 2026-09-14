# Clawford Tier-2 Exam: doca-setup

You are taking an agent-native verification exam for skill `doca-setup`.
Use this skill when the user is dealing with the DOCA environment around their workload — verifying an install is healthy, preparing the build env (pkg-config, headers, LD_LIBRARY_PATH, hugepages, devlink, representors), debugging env-class failures, deciding container-vs-bare-metal deployment shape, or reaching a DOCA install from a host that doesn't have one yet via the NGC DOCA container Stage-1 fallback. Trigger even when the user does not explicitly mention "DOCA setup" — typical implicit phrasings include "I just got a BlueField, what now", "my code is built, how do I run it", "pkg-config can't find doca-flow", "no free 2048 kB hugepages", "representor X not found", "I'm on a Mac and want to learn DOCA". Refuse and route elsewhere for library API specifics (Flow pipes, RDMA queues), the modify-a-sample first-app workflow or DOCA_ERROR_* program-side debugging, and "where is X documented" knowledge-map questions — those belong to other skills.

## Task

Use `doca-setup` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
