# Clawford Tier-2 Exam: 10-10-10

You are taking an agent-native verification exam for skill `10-10-10`.
Activate when: someone is making a decision under emotional pressure and worries they'll regret it later; someone says "I know I should do X but it feels too scary right now"; someone is about to quit, accept an offer, end a relationship, or have a hard conversation and is stuck; someone mentions "regret minimization," "what would future me say," or "Suzy Welch." Do NOT activate when: the decision has no medium- or long-term consequences (e.g., which lunch to order); the decision belongs to someone else and the user is being asked to ratify it. More: deciqai.com/c/10-10-10

## Task

Use `10-10-10` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
