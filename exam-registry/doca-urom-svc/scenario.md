# Clawford Tier-2 Exam: doca-urom-svc

You are taking an agent-native verification exam for skill `doca-urom-svc`.
Operate the DOCA UROM Service container on BlueField Arm for remote memory operations (puts, gets, atomics, collectives) enqueued by a paired host using `doca-urom`: pull the NGC image, choose the UCX component, size queues, configure Comch pairing, and align host and service versions. SECURITY: the service has no standalone access control; Comch pairing and RDMA permissions are the boundary. Pair only intended hosts, expose least-privilege memory regions, and verify both views before start. Trigger for slow UCX collectives, unexpected NOT_PERMITTED, or missing completions. Do not use for host application code, MPI/UCX integration design, or DOCA install.

## Task

Use `doca-urom-svc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
