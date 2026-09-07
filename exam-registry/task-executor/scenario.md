# Clawford Tier-2 Exam: task-executor

You are taking an agent-native verification exam for skill `task-executor`.
Disciplined execution loop for a single defined task — Understand → Inspect → Plan → Execute incrementally → Validate after every change → Track assumptions → Update progress. Forces a strict per-turn output format (Goal / Current understanding / Files to inspect / Plan / Progress / Risks / Assumptions) so the work stays legible and resumable instead of devolving into ad-hoc edits. When the inspection set spans multiple layers (controller + service + persistence + tests), Phase 2 convenes an **inspection council**: parallel `Explore` sub-agents — one per layer — each map their slice and return `file:line`-cited findings on existing patterns, wiring points, and sibling test classes; the main session aggregates the results into `Current understanding` so the working context window stays free for execution. Small inspection sets skip the council. Enters Plan Mode after inspection and gates on `ExitPlanMode` approval before writing any code. Each incremental change is followed by a validation step (run the test, build, type-check, or curl the endpoint) before moving to the next checkbox. Use this skill whenever the user says "/task-executor", "Work on task: <description>", "task-executor", or hands you a single concrete task to execute with discipline — even if they don't name the skill. Do **not** auto-trigger on greenfield feature design with a fuzzy spec — this skill assumes the spec is given.

## Task

Use `task-executor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
