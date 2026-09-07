# Clawford Tier-2 Exam: cargo-orchestration

You are taking an agent-native verification exam for skill `cargo-orchestration`.
Make Cargo actually run something, or show what it would run — execute one connector action, run a multi-step workflow, trigger a batch across a whole segment or model, message an AI agent, build or edit a node graph, draw a workflow, tool or play as a diagram, and query the runtime tables (runs, batches, spans, records) with SQL. Triggers: "run this on all my contacts", "execute the action", "kick off a batch", "build a workflow", "schedule a play", "make it run every morning", "ask the agent", "show me the workflow", "what does this tool do", "visualize this play", "draw the graph", "explain this workflow", "how many runs failed today", "what is the output schema for this action", "add a step that". Skip when: explaining why a run misbehaved — use cargo-diagnostics; downloading result files — use cargo-analytics; committing the workflow as code — use cargo-cdk.

## Task

Use `cargo-orchestration` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
