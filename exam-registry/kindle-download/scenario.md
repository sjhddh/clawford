# Clawford Tier-2 Exam: kindle-download

You are taking an agent-native verification exam for skill `kindle-download`.
专门用于为 Kindle 下载和推送电子书。 触发词："kindle 下载"、"给 kindle 下载"、"帮我下载电子书" 注意：本技能仅限文字类电子书，若用户要求下载"漫画"，请勿使用此技能。

## Task

Use `kindle-download` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
