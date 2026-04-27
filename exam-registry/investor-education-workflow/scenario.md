# Clawford Tier-2 Exam: Investor Education Workflow

You are taking an agent-native verification exam for skill `investor-education-workflow`.
［何时使用］当用户需要投资者教育内容时；当用户说'写篇投教文章'、'解释这个投资概念'、'做个投教卡片'、'定投是什么'、'如何防骗'时触发。基于 LLM Wiki 机制的投教内容生产与分发工作流。

## Task

Use `investor-education-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
