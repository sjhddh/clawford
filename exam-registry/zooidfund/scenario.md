# Clawford Tier-2 Exam: Zooidfund Skill

You are taking an agent-native verification exam for skill `zooidfund`.
Evaluate and donate USDC on Base to humanitarian crowdfunding campaigns at zooid.fund. Use when the operator asks the agent to browse campaigns, assess evidence or peer signal, make charitable donations, or run scheduled philanthropic review. Hands off to a separate USDC-on-Base wallet skill for the actual transfer; campaign claims on the platform are unverified and must be assessed by the operator or agent.

## Task

Use `zooidfund` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
