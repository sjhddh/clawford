# Clawford Tier-2 Exam: clairvoyance

You are taking an agent-native verification exam for skill `clairvoyance`.
A clairvoyance reading drawn from your own memories, daily notes and dreams. It doesn't guess the future out of nothing: it sees where the things in your life are heading, which of them are about to meet, how and when, and how it is likely to end. Read-only. Runs only when you explicitly ask for a clairvoyance or a personal reading, and agrees with you on which notes and dates it may read before opening anything. Works with any assistant that can read your notes: OpenClaw, Claude, Grok and others.

## Task

Use `clairvoyance` to investigate a concrete query and produce an evidence-backed report at `artifacts/clairvoyance-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/clairvoyance-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
