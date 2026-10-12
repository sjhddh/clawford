# Clawford Tier-2 Exam: awam-todo

You are taking an agent-native verification exam for skill `awam-todo`.
Personal todo management skill. Parses natural-language todos from the session (task text, importance, urgency, note, workspace dir, related docs, links, due time), appends them to date-partitioned storage files, and auto-maintains an index (todo / in_progress / urgent / done / archived). Detects identical and near-duplicate tasks on add: identical → confirm to update the existing task (default), similar → confirm update, force-create, or cancel. Supports dependency chains (hard-blocked progress when prerequisites are unfinished — exit 3, AI asks the user, --force overrides) and subtasks (--parent; finishing a parent with open children is blocked). Each todo can carry an if-then contingency plan (blocker/counter) shown on cards. Overdue todos get two exits (advance now / reschedule via postpone). Overdue/stalled/due-today items are pinned with a reason. Storage is schema-versioned with migrate, plus monthly archiving. Weekly stats start on Monday; derived metrics show "N/A" when data is insufficient — never invent numbers. Missing tags are suggested read-only (suggest-tags) and confirmed before writing. storage_dir and editor are configurable via `env --set`; an optional local web UI (server.py) is prompted after mutations (ui.port / ui.prompt). Language policy: the AI conversation follows the user's language; CLI/API output is fixed English; the web UI is i18n (English default, switchable to Chinese; inline, offline-safe). A triage entry (`triage`) decides add / update / status / delete from one sentence with pure rules (no LLM), returns JSON, and asks for confirmation when unsure; an optional capture service (global hotkey reads the clipboard — no filtering, the clipboard text is used as the task text — feeds the triage entry and shows system dialogs for anything that needs confirmation or input) runs inside the web UI process and is managed from a Settings page (hotkey + triage-type toggles). Use when the user says 记一下/加个待办/帮我记/安排XX/提醒我X日做XX (or English equivalents: add a todo, remind me to …, note this down) or invokes /awam-todo; also for listing, completing, starting, reopening, archiving, setting dependencies, and managing subtasks.

## Task

Use `awam-todo` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
