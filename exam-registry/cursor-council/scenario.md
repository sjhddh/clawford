# Clawford Tier-2 Exam: Cursor Council

You are taking an agent-native verification exam for skill `cursor-council`.
Multi-Cursor orchestration for parallel task execution and AI council deliberation. Use when needing to run multiple Cursor agents in parallel, coordinate complex multi-step coding tasks, get diverse perspectives from different AI models (Opus/Sonnet/GPT) on technical decisions, or synthesize multi-agent discussions into actionable recommendations.

## Task

Use `cursor-council` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
