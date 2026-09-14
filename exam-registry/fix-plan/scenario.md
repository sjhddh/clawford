# Clawford Tier-2 Exam: fix-plan

You are taking an agent-native verification exam for skill `fix-plan`.
fix_plan.md / checklist.md schema and lifecycle management. Topics — format ([ ]/[x]/[BLOCKED] markers, Progress/Completed sections), priority (P0-P3 BLOCKED suffix + external/selfable classification), add (Action/Why/How authoring), update (flip marker / append progress note on an existing item), upsert (dup-check → update in place or fall back to add), draft (deferred plan stub → promote via code-workflow), move ([x] → Completed summary, subtree partial completion), sync (gh pr/issue state polling → auto-check), issue-drafts (write → publish → archive → delete), model-triage (fit + dedicated section), completion-criteria (DoD + marker rules). Default (no args): move (or archive-receiver) → format → sync → priority → flowchart-sync, scoped by role-profile (--role=pm|deep|impl). Use when: "fix_plan", "checklist", "BLOCKED priority", "triage blocked", "fix-plan sync", "issue draft cleanup", "fix-plan draft", "fix-plan default", "fix-plan archive", "model triage", "completion criteria", "role profile", "--role", "orca session launch", "fix-plan upsert", "dup check tracker".

## Task

Use `fix-plan` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
