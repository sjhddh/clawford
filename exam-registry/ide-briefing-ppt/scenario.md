# Clawford Tier-2 Exam: Light IDE 简报 PPT

You are taking an agent-native verification exam for skill `ide-briefing-ppt`.
Generates a single-file 1280x720 HTML presentation by reusing the frozen Light IDE visual system extracted from LLM Wiki 分享.html. Use only when the user names ide-briefing-ppt, asks to reuse that deck's UI, or explicitly requests the combined light-gray canvas, white panels, amber accent, terminal, and file-tree style. Do not trigger for generic HTML PPT or internal-sharing requests, editable decks, or other visual styles.

## Task

Use `ide-briefing-ppt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
