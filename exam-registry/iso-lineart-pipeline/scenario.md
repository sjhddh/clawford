# Clawford Tier-2 Exam: iso-lineart-pipeline

You are taking an agent-native verification exam for skill `iso-lineart-pipeline`.
Produce isometric line art from a parametric 3D blockout instead of hand-placing polygons in 2D — solid primitives, orthographic projection, z-buffer hidden-line removal with per-sample visibility, stroke weight driven by distance to the silhouette, and a hard minimum feature size so detail survives at game resolution. Use when a structure sketch must lock silhouette and construction for an image-to-image model, or when a line drawing keeps coming out with floating roofs, hatching that eats the outer contour, or braces that read as scaffolding.

## Task

Use `iso-lineart-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
