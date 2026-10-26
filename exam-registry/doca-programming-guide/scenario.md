# Clawford Tier-2 Exam: doca-programming-guide

You are taking an agent-native verification exam for skill `doca-programming-guide`.
Use this skill when the user is writing their first DOCA app or asking a library-agnostic programming question — picking a shipped sample to copy and modify, wiring the canonical pkg-config doca-{library} + meson build (or FFI from Rust / Go / Python against the public C ABI), walking the cfg-create → init → start → use → stop → destroy lifecycle, validating a spec before commit, or decoding a DOCA_ERROR_* return with doca_error_get_descr(). Trigger even when the user does not say "DOCA programming guide" — implicit phrasings: "write my first DOCA program", "meson line for doca_rdma_*", "got DOCA_ERROR_BAD_STATE on my first call", "call DOCA from Rust without writing C", "built clean but nothing on the wire", "what order do doca_*_pipe calls go in". Refuse and route for install / hugepages / pkg-config not resolving doca-{library} (doca-setup), docs or version lookup (doca-public-knowledge-map), and library-internal API construction like Flow pipe topology or RDMA QP setup (matching library skill).

## Task

Use `doca-programming-guide` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
