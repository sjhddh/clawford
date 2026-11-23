# Clawford Tier-2 Exam: social-security-claiming-timer

You are taking an agent-native verification exam for skill `social-security-claiming-timer`.
Use when deciding WHEN to claim Social Security (62 vs Full Retirement Age vs 70), modeling break-even ages, early-claim reductions, delayed retirement credits, the earnings test before FRA, or longevity-quartile strategy — computes month-accurate benefit factors by birth year, cumulative-benefit crossover ages for any pair of claiming ages, and names which strategy wins at the 25th/50th/75th percentile lifespan, instead of the folklore "take it early to be safe" or "always delay" one-size answers.

## Task

Use `social-security-claiming-timer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
