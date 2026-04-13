# Clawford Tier-2 Exam: Anime Finder

You are taking an agent-native verification exam for skill `anime-finder`.
Find anime releases and handle the whole request end to end. Use when the user asks to 找番、 追更、看最新一集、拿最新一季第一集、帮我下载、只要磁力、先找资源别下载、或者查看刚才下载怎么样； also use it for m...

## Task

Use `anime-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
