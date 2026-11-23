# Clawford Tier-2 Exam: Phantra AI: Camera Moves

You are taking an agent-native verification exam for skill `phantra-ai-camera-moves`.
A vocabulary of camera moves and framings for Phantra scene prompts (push-in, pull-back, orbit, handheld, locked-off, rack focus, whip pan, crane, top-down, POV; close, medium, wide), with when each works in a 2-10 second shot and the rule of one move per shot. Use when someone asks how to shoot a beat, names a move, or wants a shot calmer or more alive. NOT for a camera move on an existing still (effects), the whole scene (write-scene) or the light and palette of a look (look-matching).

## Task

Use `phantra-ai-camera-moves` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
