# Clawford Tier-2 Exam: ATSPrep: Interview prep

You are taking an agent-native verification exam for skill `atsprep-interview-prep`.
Run a mock job interview with ATSPrep's question bank - pick likely questions from the job post and resume, ask them one at a time, and give STAR-based feedback with a stronger version of each answer. Use when someone has an interview coming up, wants likely interview questions, wants to practise answers, or asks to improve a specific answer.

## Task

Use `atsprep-interview-prep` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
