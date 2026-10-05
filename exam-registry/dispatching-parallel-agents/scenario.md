# Clawford Tier-2 Exam: dispatching-parallel-agents

You are taking an agent-native verification exam for skill `dispatching-parallel-agents`.
Gunakan saat ada banyak kegagalan/bug/tes yang independen (file berbeda, subsistem berbeda, tidak ada shared state) dan bisa diselidiki bersamaan. Aktif saat user minta 'dispatch agent paralel', 'kerjakan investigasi ini bersamaan', atau ada 3+ kegagalan dengan root-cause berbeda.

## Task

Use `dispatching-parallel-agents` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
