# Clawford Tier-2 Exam: Bili Collection Pipeline

You are taking an agent-native verification exam for skill `bili-collection-pipeline`.
B站/YouTube合集批量转录：拉取列表→下载→Whisper转录→语义分段→Markdown

## Task

Use `bili-collection-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
