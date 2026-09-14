# Clawford Tier-2 Exam: backlog

You are taking an agent-native verification exam for skill `backlog`.
Unified backlog lifecycle management and task tracking. Orchestrates session TODOs, workspace checklists (`fix_plan.md`, `checklist.md`), and issue trackers with vendor-agnostic lifecycle contracts. Topics — triage (classify incoming requests into session/file/issue backlogs), priority (GitHub-aligned P0-P3 urgency tagging and blocker triage), sync (external tracker status polling and resolution), prune (demote lower-priority backlog noise from active focus), lifecycle (authoring, state transitions, DoD criteria), comment (post follow-up notes/sub-findings to parent issues), create (issue and intake issue creation). Use when: "backlog", "backlog triage", "backlog sync", "backlog prune", "task lifecycle", "manage backlog", "backlog priority", "backlog cleanup", "plane backlog", "issue comment".

## Task

Use `backlog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
