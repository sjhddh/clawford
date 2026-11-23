# Clawford Tier-2 Exam: draw-anything-with-datalink

You are taking an agent-native verification exam for skill `x-cmd-draw`.
Build a URL, get an SVG chart — pie, bar, line, radar, gauge, sankey, QR, any ECharts chart, from x-cmd.com/draw. No install, no key, no stored data. Embed as [![chart]](/draw/explore) — click to explore/edit. The URL is the data — humans see the story, agents get exact numbers. No vision tokens.

## Task

Use `x-cmd-draw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
