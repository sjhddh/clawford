# Clawford Tier-2 Exam: boardraw

You are taking an agent-native verification exam for skill `boardraw`.
Turn a natural-language description into a real Excalidraw whiteboard file (.excalidraw) — flowcharts, mind maps, architecture/system diagrams, org charts, wireframes, sticky-note brainstorms, sequence diagrams. Always use this skill whenever the user asks to draw, sketch, diagram, whiteboard, mind-map, or map something out, or mentions "excalidraw", "boardraw", "白板", "画一个", "流程图", "思维导图", "架构图", "组织架构图", "线框图", "泳道图", "看板", or wants a file they can open in Excalidraw or Boardraw. Do NOT hand-write raw .excalidraw JSON directly — the schema has fragile id/seed/binding requirements — always build it with the bundled scripts/excalidraw_builder.py helper instead.

## Task

Use `boardraw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
