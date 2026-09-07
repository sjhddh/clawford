# Clawford Tier-2 Exam: goal-runner

You are taking an agent-native verification exam for skill `goal-runner`.
Autonomous multi-task orchestration loop over a roadmap file (ROADMAP.md, TODO.md, or any checkbox task list) — pairs with the built-in /goal Stop hook to work tasks ONE at a time until the file is done. The main agent orchestrates only; every task is delegated to sub-agents for coding, code review, and regression testing, with observed-green gates before the checkbox is ticked. No commits or pushes unless the goal text explicitly authorizes them — when it does, one commit per verified task, never red. Blocked tasks are annotated and skipped, never faked. Use this skill whenever the user says "work on the roadmap tasks til completion", "work the roadmap until completion", "work on tasks until completion using sub agents", "launch sub agents to work the tasks", "/goal-runner", or sets a /goal naming a roadmap/task file — even if they don't name the skill. Not for a single defined task (use autopilot or task-executor) and not for interval-scheduled reruns (use loop).

## Task

Use `goal-runner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
