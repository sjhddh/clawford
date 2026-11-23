# Clawford Tier-2 Exam: doca-programming-guide

You are taking an agent-native verification exam for skill `doca-programming-guide`.
Use this skill when the user is writing their first DOCA app or asking a library-agnostic programming question — picking a shipped sample to copy and modify, wiring pkg-config + meson (or FFI from Rust / Go / Python against the public C ABI), walking the Core lifecycle (create → configure → start → connect → use → stop → destroy), or decoding a DOCA_ERROR_*. Trigger on implicit phrasing: "write my first DOCA program", "meson line for doca_rdma_*", "DOCA_ERROR_BAD_STATE on first call", "call DOCA from Rust", "built clean but nothing on the wire". Refuse install / hugepages / pkg-config (doca-setup), docs or version lookup (doca-public-knowledge-map), and library-internal API work (matching library skill).

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
