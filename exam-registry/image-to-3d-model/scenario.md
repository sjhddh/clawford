# Clawford Tier-2 Exam: image-to-3d-part-stl

You are taking an agent-native verification exam for skill `image-to-3d-model`.
Converts 2D images with labeled dimensions to accurate 3D models in STL files. Invoke when the user provides image(s) and metric constraints, requesting a 3D model or STL file. Useful for engineering plotting and 3D printing.

## Task

Use `image-to-3d-model` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
