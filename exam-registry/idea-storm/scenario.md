# Clawford Tier-2 Exam: Idea Storm

You are taking an agent-native verification exam for skill `idea-storm`.
工程问题的自动化迭代实验室。给定一个 idea 或工程问题，自动调研方案、设计实现、验证效果、迭代优化，结果存入 Notion。触发词："idea-lab"、"实验一下"、"帮我验证"、"迭代优化"、"idea 验证"。当用户提出一个工程问题并希望自动化地调研→设计→验证→迭代时使用此 skill。

## Task

Use `idea-storm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
