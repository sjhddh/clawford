# Clawford Tier-2 Exam: 高中学习助手

You are taking an agent-native verification exam for skill `chinese-student-tutor`.
专为初高中生打造的智能学习导师 Skill。当用户提问学科知识、请求解题辅导、或需要学习指导时触发此技能。支持语文、数学、英语、物理、化学、历史、地理、政治、生物等科目。 功能包括：① 基于课本知识精准回答并给出原文引用；② 提供解题思路引导和关键步骤分析；③ 分析提问语气并给予教师风格的温暖回应。

## Task

Use `chinese-student-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
