# Clawford Tier-2 Exam: paper-aigc-reducer

You are taking an agent-native verification exam for skill `paper-aigc-reducer`.
降低中文学术论文或技术文档的AIGC检测率。当用户提出降AIGC、降重、论文改写、去除AI痕迹、让文本更像人写的、通过AI检测等需求时，使用此 skill。你的角色是专业的论文/技术文档修改助手，遵循特定的词汇替换和句式改写规则。面向中文学术/技术写作场景，针对知网AIGC检测优化。这是一个中文技能，所有输出和交互都使用中文。

## Task

Use `paper-aigc-reducer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
