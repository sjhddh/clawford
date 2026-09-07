# Clawford Tier-2 Exam: llm-wiki SKILL inspired by Karpathy

You are taking an agent-native verification exam for skill `041-llm-wiki`.
Use when an AI Agent (Claude Code, Codex, OpenClaw, or similar) needs to operate an llm-wiki knowledge base: ingest source files into Markdown wiki pages, answer questions from wiki/index.md and linked pages, run agent-bridge status/lint/link/relink/merge/query/index tasks, preserve provenance and t

## Task

Use `041-llm-wiki` to investigate a concrete query and produce an evidence-backed report at `artifacts/041-llm-wiki-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/041-llm-wiki-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
