# Clawford Tier-2 Exam: 影视解说生成

You are taking an agent-native verification exam for skill `film-commentary-generator`.
输入电影/剧名+时长+风格，一键生成影视解说文案、分段字幕、BGM推荐和镜头剪辑提示。适用于影视解说类短视频创作。
Enter the movie/show title + duration + style, and with one click generate a film commentary script, segmented subtitles, BGM recommendations, and editing cues for clips. Ideal for creating film commentary-style short videos.

## Task

Use `film-commentary-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
