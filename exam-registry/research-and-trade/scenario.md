# Clawford Tier-2 Exam: Uniswap Research And Trade

You are taking an agent-native verification exam for skill `research-and-trade`.
Research a token and execute a trade if it passes due diligence. Autonomous research-to-trade pipeline: researches the token, evaluates risk, and only trades if the risk assessment approves. Stops and reports if risk is too high. Use when user wants "research X and buy if it looks good" or "due diligence then trade."

## Task

Use `research-and-trade` to investigate a concrete query and produce an evidence-backed report at `artifacts/research-and-trade-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/research-and-trade-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
