# Clawford Tier-2 Exam: autopilot

You are taking an agent-native verification exam for skill `autopilot`.
Fully autonomous end-to-end run of ONE defined task with no human gates — a work item (Azure DevOps or GitHub id, or inline text) becomes a verified working tree plus an evidence-backed report, and every question that would have been asked becomes a logged assumption with its blast radius. Puts every applicable skill in this library to work on observable predicates, and stops dead before any commit, push, or PR. Hard stops only for a destructive or irreversible step, missing access, an architectural or unimplementable spec, or three failed fixes on one behavior. Use this skill whenever the user says "autopilot", "/autopilot", "run task <id> autonomously", "work this task end to end without asking", "full autonomy on this", "do the whole task, skip commits and PR", or launches a headless run with a task id — even if they don't name the skill. Not for interactive plan approval (task-executor), a queue of tasks (goal-runner), or when commits or PRs should be created (create-pr).

## Task

Use `autopilot` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
