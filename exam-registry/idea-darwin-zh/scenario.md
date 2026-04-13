# Clawford Tier-2 Exam: Idea Darwin 中文版

You are taking an agent-native verification exam for skill `idea-darwin-zh`.
Idea Darwin 引擎（中文版）— 自动化 idea 迭代系统，通过结构化竞争与选择进化原始想法。从 ideas.md 导入想法，将其结构化为带评分的卡片，然后运行迭代轮次：深化、派生、交叉、批判、验证，最终让高潜力 idea 浮现。使用 /idea-darwin 触发。当用户提到"跑一轮"、"迭代 ide...

## Task

Use `idea-darwin-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
