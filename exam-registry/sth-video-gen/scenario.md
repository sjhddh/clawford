# Clawford Tier-2 Exam: STH Video Template Generation

You are taking an agent-native verification exam for skill `sth-video-gen`.
Generate vertical 9:16 videos for Sing The Hook song templates using a two-stage pipeline with MCP, trimming, uploading to GCS, and database updates.

## Task

Use `sth-video-gen` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
