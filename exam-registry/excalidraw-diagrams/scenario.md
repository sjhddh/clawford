# Clawford Tier-2 Exam: Excalidraw Diagrams for Obsidian

You are taking an agent-native verification exam for skill `excalidraw-diagrams`.
Turn a plain list of boxes and arrows into a clean, hand-drawn Excalidraw diagram: an Obsidian Excalidraw note (.excalidraw.md) or a .excalidraw file for excalidraw.com. A deterministic script does the layout, labels and arrow bindings. Use only when the user explicitly asks for an Excalidraw drawing or an Excalidraw file in Obsidian.

## Task

Use `excalidraw-diagrams` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
