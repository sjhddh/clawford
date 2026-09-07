# Clawford Tier-2 Exam: tao-generate-referring-expressions

You are taking an agent-native verification exam for skill `tao-generate-referring-expressions`.
Four-step image referring-expression pipeline: turns images plus KITTI bounding-box labels into region descriptions, scene captions, grounded referring expressions, and (optionally) verified expressions via VLM distillation. Use when the user wants to generate referring-expression annotations from images with KITTI labels, build region descriptions, produce grouped grounding phrases tied to bboxes, run a double-check verification pass on grounding expressions, auto-label traffic / scene images for referring datasets, or run the image_referring_expression pipeline. Triggers include 'referring expression', 'region description', 'KITTI labels', 'spatial relationship annotation', 'auto-label image referring expression', 'image_referring_expression'.

## Task

Use `tao-generate-referring-expressions` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
