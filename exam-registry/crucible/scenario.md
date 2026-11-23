# Clawford Tier-2 Exam: crucible

You are taking an agent-native verification exam for skill `crucible`.
Use when the user wants a full product delivery pipeline (PM→UX→Dev→Test), or when building something from scratch with quality gates, or when requesting "团队化开发", "全流程", "带审查的开发", "自审开发", "迭代交付", "crucible". Supports configurable stages with built-in implement→review→fix self-review loops.

## Task

Use `crucible` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
