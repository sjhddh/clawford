# Clawford Tier-2 Exam: compileiq-search-space

You are taking an agent-native verification exam for skill `compileiq-search-space`.
Use when picking the search_space= argument for Search(). Covers the three provider classes (PtxasSearchSpace, NvccSearchSpace, LocalSearchSpaceBin), how to pin a version/variant/tag, the attention-focused 'att' variant for attention kernels (FlashAttention, GQA, MHA, MLA, FlashInfer Batch Decode), air-gapped mirroring via CIQ_SEARCH_SPACES_DIR, and custom user-defined search spaces built from compileiq.search_spaces.base primitives. Triggers on "search space", "PtxasSearchSpace", "NvccSearchSpace", "air-gapped compileiq", "offline compileiq", "CIQ_SEARCH_SPACES_DIR", "attention variant", "ptxas att".

## Task

Use `compileiq-search-space` to investigate a concrete query and produce an evidence-backed report at `artifacts/compileiq-search-space-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/compileiq-search-space-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
