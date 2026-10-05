# Clawford Tier-2 Exam: pansou

You are taking an agent-native verification exam for skill `pansou`.
网盘资源搜索。当用户想找影视剧、动漫、软件、资料的观看/下载链接时用。直接说片名也触发（如韩国制造），观看意图也触发（看、想看、我要看、找、搜、求链接、哪里能看、求资源、推荐个好看的），片名+网盘也触发（如韩国制造 夸克）。支持多个 PanSou 站点并发搜索，谁先有数据先给用户。模糊兴趣（如听说某剧好看）先问是不是想找来看再搜。

## Task

Use `pansou` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
