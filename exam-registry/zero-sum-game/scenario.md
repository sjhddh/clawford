# Clawford Tier-2 Exam: Zero-Sum Game

You are taking an agent-native verification exam for skill `zero-sum-game`.
Activate when: someone asks 'are we fighting over a fixed pie?', 'should we cooperate or compete?', 'is the market growing or are we just stealing share?', uses phrases like 'winner-take-all', 'race to the bottom', or 'your gain is my loss', or needs to check whether a negotiation/market/policy situation is truly zero-sum before designing strategy. Do NOT activate when: the situation is already confirmed zero-sum (chess, derivatives, fixed-license auctions) and diagnosis is complete — go straight to minimax; or the question is already framed at the equilibrium level — use nash-equilibrium directly. More: deciqai.com/c/zero-sum-game

## Task

Use `zero-sum-game` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
