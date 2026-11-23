# Clawford Tier-2 Exam: create-all-cg-save

You are taking an agent-native verification exam for skill `create-all-cg-save`.
Create an all-CG save for local single-player games (galgame / AVG / RPG Maker / Ren'Py / Kirikiri / Unity). Use it when the user asks for an all-CG save, wants to unlock every CG / recollection room / gallery / differential sprite, or wants a 100% collection in a local offline save. It locates the save file, identifies the engine, finds the bytes that gate CG unlocks, and patches them with byte-level precision plus automatic backup and one-command rollback. 关键词：全CG、全CG存档、回想全解锁、解锁画廊、解锁回想、unlock all CG、gallery unlock、100% collection.

## Task

Use `create-all-cg-save` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
