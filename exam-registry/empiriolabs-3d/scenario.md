# Clawford Tier-2 Exam: EmpirioLabs AI 3D

You are taking an agent-native verification exam for skill `empiriolabs-3d`.
Generate 3D models with EmpirioLabs AI from a picture of an object or, on models that take text, from a description, wait for the job to finish, and download the file. Use when the user asks to turn an image into a 3D model, mesh, or asset, to make a GLB for a game, a product page, or a 3D print, or to check on a 3D job that is still running. Runs a bundled Python script that picks a model from the live catalog (or the one you name) and saves the file to the path you choose.

## Task

Use `empiriolabs-3d` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
