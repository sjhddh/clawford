# Clawford Tier-2 Exam: English Native Reviewer

You are taking an agent-native verification exam for skill `english-native-reviewer`.
不只是语法检查——专治中式英语（Chinglish）和翻译腔。四级递进审查（L1语法→L2翻译腔→L3用词→L4风格）， 把中国作者写的英文改得像母语者写的。 Use when user asks to 检查英文语法、润色英文、修改英文表达、把这段英文改得更地道、 英文翻译腔检测、去Chinglish、英文写作审...

## Task

Use `english-native-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
