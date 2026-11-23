# Clawford Tier-2 Exam: engram

You are taking an agent-native verification exam for skill `engram`.
Local associative memory graph for an OpenClaw workspace, shipped as a set of CLI scripts: engram.py (store/recall/msgctx/task ledger over SQLite+FTS+embeddings), engram-migrate.py (markdown to nodes), engram-serve.py and bq.py (optional warm daemon over a Unix socket), embeddings.py (ONNX e5 vectors), engram-backup.py (nightly SQLite backup with retention), engram-sleep.py (nightly consolidation, optional local-Ollama distillation), engram-maintenance.py and engram-hygiene.py (dedupe/orphan/archive tiering), engram-aliases.py (alias curation), engram-rewire.py (opt-in: slims MEMORY.md, adds marked cron lines, asks first), engram-uninstall.py (full revert). Task evidence strings run through the shell. No network calls except to localhost Ollama, and only if you enable it.

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
