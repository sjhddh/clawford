# Clawford Tier-2 Exam: MiniMax H3 Video Editing Prompt

You are taking an agent-native verification exam for skill `h3-video-editing-prompt`.
Write or revise MiniMax H3 Ref2VA prompts for editing a source video from reference images or audio, especially masked or false-colour person replacement, face replacement, costume or object replacement, cross-shot identity persistence, overlay cleanup, and lip-sync preservation. Use when a request

## Task

Use `h3-video-editing-prompt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
