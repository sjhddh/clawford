# Clawford Tier-2 Exam: 英语音标标注技能

You are taking an agent-native verification exam for skill `english-phonetic-skill`.
英语文本音标标注技能，能够将英语文本标明国际音标(IPA)、轻重音符号、升降调标记以及中文拼音对照读音，适用于英语学习、发音教学和语音分析场景，特别适合中文母语者通过拼音快速掌握英语发音

## Task

Use `english-phonetic-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
