# Clawford Tier-2 Exam: VideoLens

You are taking an agent-native verification exam for skill `videolens`.
Manually turn user-selected videos into timestamped reports with a pinned VideoLens runtime and OpenAI BYOK. Use for summaries, tutorials, meetings, bugs, UX, privacy, and creator QA. Bootstrap clones GitHub code and installs dependencies only after explicit approval; analysis sends selected media-derived content to OpenAI only after separate credit approval.

## Task

Use `videolens` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
