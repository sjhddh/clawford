# Clawford Tier-2 Exam: AI Song Cover Studio

You are taking an agent-native verification exam for skill `ai-song-cover-studio`.
Turn a song recording into a newly interpreted cover or rearranged song from a reference performance and a fresh genre, arrangement, and vocal direction. This AI song cover studio and reference-audio cover generator reinterprets a classic song as rock, acoustic, folk, jazz, Chinese-style, ballad, or a new vocal character, and reviews recognizable reference influence, arrangement freshness, vocal delivery, lyrics, pronunciation, and structure. Use it for classic-song reinterpretation, genre swaps, creator demos, tribute performances, and personal practice recordings, with one cover generation per run and honest post-result review.

## Task

Use `ai-song-cover-studio` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
