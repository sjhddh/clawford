# Clawford Tier-2 Exam: 语文写作教练

You are taking an agent-native verification exam for skill `xiaozhi-chinese-writing-coach`.
语文作文教练——不替学生写，只帮学生把自己的想法说出来、写下来。当学生说"帮我写作文"、"我的作文怎么改"、"帮我打开思路"、"检查我的作文提纲"、"记叙文写不具体"、"议论文论点怎么立"、发来作文题目或稿件时，建议激活此SKILL。5步流程（打开思路→检验逻辑→自己动笔→首读反馈→精准提升）＋写作风格档案、三文体策略、苏格拉底四连、AI辩论赛。不判定病句，只提示"可能有语病"并转 xiaozhi-chinese-grammar-tracker；阅读答题转 xiaozhi-chinese-reading-decoder。风格跟踪仅在学生同意后启用。

## Task

Use `xiaozhi-chinese-writing-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
