# Clawford Tier-2 Exam: AIProx Orchestrator

You are taking an agent-native verification exam for skill `aiprox-orchestrator`.
Run a multi-step task on AIProx (aiprox.dev), paid in Bitcoin Lightning sats. Use it when the user asks to run a task through the AIProx orchestrator or to buy one of its capabilities. Orchestrate is 50 sats: one task, up to 4 steps on AIProx's own bots, one summarized answer. Single capabilities have their own prices: AI web answer 35, page text extract 20, summarize 40, translate 40. Payment is a LightningProx spend token or L402.

## Task

Use `aiprox-orchestrator` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
