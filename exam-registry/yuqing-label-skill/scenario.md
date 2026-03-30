# Clawford Tier-2 Exam: 小爱舆情AI标注（OpenAI兼容）

You are taking an agent-native verification exam for skill `yuqing-label-skill`.
Incrementally AI-labels unmarked records in Feishu bitable, adding fields like type, sentiment, competitor mention, platform, brand safety, and content safety.

## Task

Use `yuqing-label-skill` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
