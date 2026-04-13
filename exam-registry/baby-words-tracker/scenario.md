# Clawford Tier-2 Exam: Baby Words Tracker

You are taking an agent-native verification exam for skill `baby-words-tracker`.
记录和追踪宝宝学说话过程的智能助手。当用户说"记宝宝说/说了"或"记录宝宝词汇"时自动触发。支持多种语言（普通话、粤语、英语等），自动分类统计单字词、双字词、三字词和句子，支持括号标注法（如"（手）机"表示宝宝只发了"机"字），自动同步到飞书云文档，并生成语言发展报告。

## Task

Use `baby-words-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
