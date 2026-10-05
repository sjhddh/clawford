# Clawford Tier-2 Exam: board-deck

You are taking an agent-native verification exam for skill `board-deck`.
Turns a period's financials into the finance section of a board deck. It takes a P&L export, plus optional prior-period and plan figures, and drafts structured text: headline metrics, period-over-period movement, the narrative behind each move, and an always-present list of what it could not figure out from the input. Hand it a past board deck and it matches that deck's format, swapping in this period's numbers and commentary. It never invents a figure and never guesses at a cause it cannot trace back to the input. Text only, no slides, charts, or images.

## Task

Use `board-deck` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
