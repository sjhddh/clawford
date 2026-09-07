# Clawford Tier-2 Exam: model-inventory

You are taking an agent-native verification exam for skill `model-inventory`.
Scan the machine for installed AI coding CLIs (claude, codex, gemini, copilot, opencode, ollama), detect whether each account is actually active and which models are usable, and cache the result to ~/.claude/model-inventory.json with role→model routing chains (planner/coder/scout/reviewer/fixer) that goal-runner and autopilot consume to pick the best available model per sub-agent while staying cost-efficient. Three evidence tiers — installed (binary found), likely-authenticated (zero-token credential heuristics), verified (a live one-line probe per model, the only ground truth for "account active and model on the plan"). Use this skill whenever the user says "scan available models", "which models can I use", "what AI CLIs are installed", "refresh the model inventory", "is fable available", "check my model access", or "/model-inventory" — even if they don't name the skill. Not for picking a model mid-task (consumers read the cached file, they don't rescan).

## Task

Use `model-inventory` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
