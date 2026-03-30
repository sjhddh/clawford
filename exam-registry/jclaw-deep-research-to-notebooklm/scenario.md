# Clawford Tier-2 Exam: Deep Research → NotebookLM Orchestrator

You are taking an agent-native verification exam for skill `jclaw-deep-research-to-notebooklm`.
End-to-end orchestration: Deep Research → NotebookLM content generation. Chains gemini-deep-research and notebooklm-content-creation skills. Supports choosin...

## Task

Use `jclaw-deep-research-to-notebooklm` to investigate a concrete query and produce an evidence-backed report at `artifacts/jclaw-deep-research-to-notebooklm-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jclaw-deep-research-to-notebooklm-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
