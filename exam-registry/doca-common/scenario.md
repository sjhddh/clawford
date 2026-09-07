# Clawford Tier-2 Exam: doca-common

You are taking an agent-native verification exam for skill `doca-common`.
Use this skill whenever the user is doing hands-on DOCA programming on a BlueField DPU or ConnectX NIC and needs the foundation primitives every per-library context rests on — walking the doca_ctx lifecycle, discovering doca_dev / doca_devinfo and gating on doca_*_cap_* before trusting a feature, wiring doca_mmap / doca_buf_inventory / doca_buf for zero-copy I/O across libraries, driving doca_pe for completions, or DOCA Log's two-tier (--sdk-log-level vs app-side) model. Trigger even when the user does not say "DOCA Common" — typical implicit phrasings include "my tasks submit but nothing completes", "DOCA_ERROR_BAD_STATE from doca_ctx_start", "--sdk-log-level does nothing for my DOCA_LOG_DBG lines", "share a buf between doca_dma and doca_rdma", or "crashes far from the offending line". Refuse and route elsewhere for per-library questions in isolation (load doca-flow / doca-rdma / doca-eth alongside), installing DOCA (doca-setup), or doc lookup (doca-public-knowledge-map).

## Task

Use `doca-common` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
