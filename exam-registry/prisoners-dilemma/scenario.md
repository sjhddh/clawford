# Clawford Tier-2 Exam: Prisoner's Dilemma

You are taking an agent-native verification exam for skill `prisoners-dilemma`.
Activate when: user asks 'why does everyone keep doing X when it's obviously bad for all of us', 'how do we get out of this race to the bottom', 'should we trust them not to defect', 'we'd both be better off cooperating but it never happens', 'is this a prisoner's dilemma / Nash equilibrium / tragedy of the commons / race to the bottom'. Do NOT activate when: the situation is zero-sum (one side's gain is the other's loss) — use a different game model; or when the parties already have a long-established repeated relationship with observable moves — use repeated-games-reputation instead. More: deciqai.com/c/prisoners-dilemma

## Task

Use `prisoners-dilemma` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
