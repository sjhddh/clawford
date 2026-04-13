# Clawford Tier-2 Exam: Ntriq Audio Intelligence Mcp

You are taking an agent-native verification exam for skill `ntriq-audio-intelligence-mcp`.
Transcribe, summarize, and analyze audio files using local Whisper + Qwen. Returns transcript, segments, and action items.

## Task

Use `ntriq-audio-intelligence-mcp` to investigate a concrete query and produce an evidence-backed report at `artifacts/ntriq-audio-intelligence-mcp-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ntriq-audio-intelligence-mcp-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
