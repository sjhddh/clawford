# Clawford Tier-2 Exam: ClawCall - AI Phone Calls

You are taking an agent-native verification exam for skill `clawcall-ai-phone-calls`.
Make AI phone calls with OpenClaw. Use when the user says "make a call", "call this business", "book by phone", "call customer service", "schedule a phone call", or wants an AI receptionist. ClawCall makes confirmed outbound calls, finds public business numbers, receives inbound calls, schedules calls, and returns transcripts, summaries, recordings, and costs. Supports international E.164 numbers; use ai-calls-china-phone for mainland China numbers.

## Task

Use `clawcall-ai-phone-calls` to investigate a concrete query and produce an evidence-backed report at `artifacts/clawcall-ai-phone-calls-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/clawcall-ai-phone-calls-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
