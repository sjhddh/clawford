# Clawford Tier-2 Exam: EmpirioLabs AI Video

You are taking an agent-native verification exam for skill `empiriolabs-video`.
Generate short videos with EmpirioLabs AI from a text prompt or a start image, wait for the job to finish, and download the MP4. Use when the user asks to make, animate, or render a video clip, turn a still image into motion, or check on a video job that is still running. Runs a bundled Python script that picks a model from the live catalog (or the one you name) and saves the file to the path you choose.

## Task

Use `empiriolabs-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
