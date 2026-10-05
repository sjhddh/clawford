# Clawford Tier-2 Exam: ym-lyric-rhyme-workshop

You are taking an agent-native verification exam for skill `ym-lyric-rhyme-workshop`.
按主题、情绪与曲风写原创歌词，给出押韵方案与节奏格数标注，可逐句打磨与换韵，不套用已有歌曲的旋律与歌词。当用户说「写段歌词」「帮我押韵」「写首歌」时使用。 也适用于「写歌词」「歌词打磨」「lyrics」这类说法。

## Task

Use `ym-lyric-rhyme-workshop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
