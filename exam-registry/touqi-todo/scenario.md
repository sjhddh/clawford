# Clawford Tier-2 Exam: Touqi Todo

You are taking an agent-native verification exam for skill `touqi-todo`.
帮用户整理人生中重要的事：遗愿、交代、账号密码、想对谁说的话。用于用户想要记录遗愿、交代后事、整理数字遗产、给家人朋友留话、标记谁能看什么内容、回看整理进度、或者导出整理成果的场景。当用户提到死亡准备、身后事、遗书、遗嘱内容整理、账号交接、给家人留言、生前安排等话题时，应主动使用此技能。

## Task

Use `touqi-todo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
