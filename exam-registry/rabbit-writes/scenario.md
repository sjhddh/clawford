# Clawford Tier-2 Exam: rabbit-writes

You are taking an agent-native verification exam for skill `rabbit-writes`.
Write, edit, or audit prose in a specific person's saved voice, or strip machine-writing patterns when there is no voice to apply. Use whenever the user will send or publish text as themselves (emails, Slack and chat messages, reports, incident writeups, reviews, proposals, documentation, personal correspondence), and whenever the user asks to humanize text, remove AI-isms or AI slop, de-slop a draft, check whether writing sounds AI-generated, make a draft sound less like a chatbot, rewrite something in their voice, match their style, make it sound like them, swap or change the active voice, or draft new prose that will not read as machine output. Covers detect-only audits, in-place file edits, full voice conversions, and drafting from scratch.

## Task

Use `rabbit-writes` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
