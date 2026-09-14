# Clawford Tier-2 Exam: Engram

You are taking an agent-native verification exam for skill `engram`.
One-install associative memory graph for any OpenClaw workspace: stage, migrate markdown memory, rewire, verify with a seeded battery, and revert.

SQLite knowledge graph with hybrid retrieval: FTS5 + ONNX embeddings + tag/graph channels fused via weighted RRF, reranked by a CPU cross-encoder. Calibrated abstention blocks ungrounded answers. Intentions fire on deterministic keyword match (~50ms, no LLM). Bi-temporal props track fact validity. Warm daemon; degrades to pure FTS. Zero cloud.

## Task

Use `engram` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
