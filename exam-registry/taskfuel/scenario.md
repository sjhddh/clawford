# Clawford Tier-2 Exam: taskfuel

You are taking an agent-native verification exam for skill `taskfuel`.
Let an agent discover and call paid APIs (search, market data, enrichment, and more) through the user's taskfuel.ai account, paid per call from their prepaid balance. Use when the user asks the agent to buy/call a paid API, mentions taskfuel.ai, or a task needs a paid capability (web search, tweet search, market data) the agent lacks.

## Task

Use `taskfuel` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
