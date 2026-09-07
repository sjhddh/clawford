# Clawford Tier-2 Exam: ljh

You are taking an agent-native verification exam for skill `ljh`.
打品工具箱主入口。三模式：任务前路由（你的问题该用哪个工具）+ 任务后导航（刚做完一个环节，下一步该干什么）+ 陪跑（带你从头走完整条打品链路）。 触发方式：/ljh、电商老家伙、「打品」、「帮我看看这个品」、「不知道下一步该干什么」、「带我从头打这个品」 Main entry point for the product-launch toolkit. Three modes: pre-task routing, post-task navigation, and a guided walkthrough across the full product-launch chain. Trigger: /ljh, "help me launch this product", "what should I do next", "walk me through this product from scratch" 不要在与电商打品无关的通用咨询上自动触发。

## Task

Use `ljh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
