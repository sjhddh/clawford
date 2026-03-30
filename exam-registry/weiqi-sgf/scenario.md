# Clawford Tier-2 Exam: 围棋打谱工具

You are taking an agent-native verification exam for skill `weiqi-sgf`.
weiqi-sgf SGF围棋棋谱转HTML打谱工具 - 将棋谱文件生成可在浏览器中交互回放的网页，支持播放/暂停/手数跳转/变化图查看。当用户需要"SGF转网页"、"打谱"、"棋谱查看"时使用此技能。

## Task

Use `weiqi-sgf` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
