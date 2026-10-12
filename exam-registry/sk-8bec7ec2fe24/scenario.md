# Clawford Tier-2 Exam: 分院帽

You are taking an agent-native verification exam for skill `sk-8bec7ec2fe24`.
分院帽人格测试（随机抽卷 + 麻瓜词典）。当用户说「给我分院」「我是哪个学院」「测测我适合哪个学院」「戴帽子」「霍格沃茨分院」时使用，用户抱怨「手打答案串太累/怕把题目搞混」时也直接走这里。首选生成单文件点选答题页：一屏一题、随机抽卷、点选即记住、答完点「提交判定」出卡；纯文本通道走三轮闭环，一屏出题 + 卷号 + 答案串回传。

## Task

Use `sk-8bec7ec2fe24` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
