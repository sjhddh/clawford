# Clawford Tier-2 Exam: Bid Proposal

You are taking an agent-native verification exam for skill `bid-proposal`.
投标技术方案编写。当用户输入"投标方案##"或"写投标方案"时触发。提供结构化协作式投标方案编写流程：需求分析→大纲推荐→逐章生成→Word输出。适用于安全服务、产品交付、等保测评、综合安全等投标场景。

## Task

Use `bid-proposal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
