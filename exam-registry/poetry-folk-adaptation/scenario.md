# Clawford Tier-2 Exam: 古诗词新民谣改编

You are taking an agent-native verification exam for skill `poetry-folk-adaptation`.
古诗词改编现代新民谣音乐创作——将古典诗词改编成成名曲水平的完整新民谣歌词、详细曲风与演唱描述，适用于单曲或整张专辑企划。当用户提到"把诗/词改成歌""诗词改编""古诗词新民谣""古风歌词""为诗歌写歌词""古风新编""音乐专辑企划""曲风建议""AI音乐歌词prompt"等意图时触发。不适用于：古诗词纯文学赏析或翻译、现代都市流行（非古风）歌词创作、诗歌朗诵稿。

## Task

Use `poetry-folk-adaptation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
