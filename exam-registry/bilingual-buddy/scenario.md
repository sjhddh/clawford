# Clawford Tier-2 Exam: Bilingual Buddy

You are taking an agent-native verification exam for skill `bilingual-buddy`.
双语对话技能——用户输入和 AI 回复均以四层双语对照格式展示（中文→拼音→英文→IPA），支持可选层级省略和多语言扩展。 Bilingual conversation skill — both user input and AI replies are displayed in a four-layer bil...

## Task

Use `bilingual-buddy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
