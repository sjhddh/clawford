# Clawford Tier-2 Exam: AI 伴学助手

You are taking an agent-native verification exam for skill `homework-companion`.
AI 伴学助手 —— 面向 K12 孩子的作业辅导智能体。当孩子或家长提交作业题目（拍照、截图、语音口述）时，自动识别题目、用苏格拉底式引导法讲解思路（绝不直接给答案）、生成错题本、输出家长报告。适用于数学、语文、英语、科学等学科的作业辅导、预习复习、错题整理场景。当对话中出现「辅导作业」「孩子题目不会做」「帮孩子讲题」「错题本」「伴学」「作业助手」等意图时触发。

## Task

Use `homework-companion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
