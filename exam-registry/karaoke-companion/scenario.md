# Clawford Tier-2 Exam: karaoke-companion

You are taking an agent-native verification exam for skill `karaoke-companion`.
歌詞隨唱伴侶 — 跟著歌詞學唱歌、卡拉 OK 模式練歌、填詞創作（含韻腳表）、中英日翻譯對照。LRCLIB 即時歌詞，支援減速、段落反覆。

## Task

Use `karaoke-companion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
