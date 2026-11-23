# Clawford Tier-2 Exam: edit-footage-with-code

You are taking an agent-native verification exam for skill `edit-footage-with-code`.
Edit real footage with an agent: turn raw takes of a talking head, podcast, vlog, course or ad into a clean cut, then add captions, B-roll, motion graphics and sound with HyperFrames or Remotion. Reads the take as text and audio, removes dead air, retakes and stumbles without clipping words, writes the cut as an edit list a person can review, keeps every graphic on the spoken word, and checks the result with numbers and frames before a person watches; tested scripts and defaults from 2,318 editors' posts. Use for "edit this video", "cut my footage", "remove the pauses", "cut the dead air", "clean up my talking head", "rough cut", "edit with HyperFrames", "edit with Remotion", "make it look edited", when an agent's edit keeps coming back wrong, or to rank cuts with an unbiased LLM judge ("which edit is better"). Not for generating video from a prompt (varg-ai), for choosing a hosted editing service (varg-video-editing), or for finding music, B-roll or sound effects (video-asset-sources).

## Task

Use `edit-footage-with-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
