# Clawford Tier-2 Exam: 风咏

You are taking an agent-native verification exam for skill `windchant`.
将古诗词、古文名篇、现代散文/小说改编为歌曲。 故事前因后果织入歌词叙事，原文名句可直引点睛、意象化用为血肉（禁抄他人歌词）。 输出：歌词全文（附原文化用出处）+ 曲风/编曲方案（可直接投喂 AI 音乐工具）。

## Task

Use `windchant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
