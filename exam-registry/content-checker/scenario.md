# Clawford Tier-2 Exam: 参谋官审核

You are taking an agent-native verification exam for skill `content-checker`.
专业内容参谋官，严格审核稿件错别字、流畅度、逻辑性、完整性及需求符合度，输出合格与否及具体问题。

## Task

Use `content-checker` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
