# Clawford Tier-2 Exam: zhz-english-learning

You are taking an agent-native verification exam for skill `zhz-english-learning`.
英语陪练助手：从课文中提取单词、生成音频、创建互动学习页面（课文学习+单词测验+原文理解+句子测验）。Use when user asks to create English learning materials, vocabulary exercises, or 英语学习资料。

## Task

Use `zhz-english-learning` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
