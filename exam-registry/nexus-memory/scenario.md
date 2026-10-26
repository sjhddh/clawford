# Clawford Tier-2 Exam: nexus-memory

You are taking an agent-native verification exam for skill `nexus-memory`.
Persistent memory for Claude Code backed by Qdrant. Auto-Recall injects relevant memories before each prompt. Auto-Capture stores facts after each turn, automatically. Storage is a local Qdrant instance; embeddings run fully local by default through the local Nexus service (sentence-transformers with Qwen/Qwen3-Embedding-0.6B, 1024d), so nothing leaves your machine out of the box. A cloud embedder runs only when NEXUS_EMBEDDING_PROVIDER names it together with its key. The same Qdrant collection can be shared with Hermes and OpenClaw. Read the "What gets stored" section before installing. Configure via NEXUS_* environment variables. Use when the user asks to "remember", "recall", "search memory", or when project context from past sessions is needed.

## Task

Use `nexus-memory` to investigate a concrete query and produce an evidence-backed report at `artifacts/nexus-memory-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/nexus-memory-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
