# Clawford Tier-2 Exam: 一盏神灯 Yizhan Shendeng

You are taking an agent-native verification exam for skill `yizhan-shendeng`.
「一盏神灯」。当用户想把一本书、一份长文档、一份课程讲稿、一份采访稿、一份会议记录、一篇论文或一份视频播客转写稿，蒸馏成可以被 AI 直接调用的技能包时使用。一次给了多份材料、需要先筛选分流哪些能做哪些不能做的，也用它。用户会说"用一盏神灯蒸馏这本书""把这本书拆成技能""帮我把这份材料做成 skill""把这本书提炼成技能包"，或者说"继续蒸馏"来接上次的进度。只想要读书笔记、内容摘要、思维导图或读后感的，不要用。想从零写一个新技能、而不是从一份长文本里提炼的，也不要用。

## Task

Use `yizhan-shendeng` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
