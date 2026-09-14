# Clawford Tier-2 Exam: backlog-planner

You are taking an agent-native verification exam for skill `backlog-planner`.
Turn a feature idea, conversation context, or rough notes into researched, detailed, dependency-ordered checkbox tasks appended to the project's roadmap/backlog file — exactly the format goal-runner consumes, so a fresh unattended session can execute them. Grounds every task in the actual codebase before writing it (grep/read or Explore scouts; think-like-fable rigor if installed), puts what + done-when on the checkbox line with verified files, acceptance criteria, and a verification command in plain sub-bullets, and labels assumptions. Appends to the existing ROADMAP.md/BACKLOG.md/TODO.md; when none exists it asks once and defaults to ROADMAP.md. Use this skill whenever the user says "add this to the backlog", "add it to the roadmap", "plan these tasks", "break this down into tasks", "capture this as roadmap tasks", "turn these notes into a task list", or "/backlog-planner" — even if they don't name the skill. Not for executing tasks (goal-runner, task-executor, autopilot) — this writes the plan only.

## Task

Use `backlog-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
