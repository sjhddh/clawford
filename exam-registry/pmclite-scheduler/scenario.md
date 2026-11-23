# Clawford Tier-2 Exam: 轻排生产排产

You are taking an agent-native verification exam for skill `pmclite-scheduler`.
通过 MCP 工具操作轻排桌面程序（MRP-PMC），完成生产排产、排程预演与落库、交期评审、插单评估、物料齐套检查、报工与生产看板查询。 用户说出“帮我排产”“排一下明天的产”“这单能不能接”“交期来得及吗”“查一下工单”“齐套了吗”“缺什么料”“插个单行不行”“报工 50 件”“今天生产怎么样”“最近有哪些异常”时使用。 不触发：新建物料/产品/BOM 等基础资料录入、财务报表、采购下单、与轻排程序无关的通用排产理论问答。

## Task

Use `pmclite-scheduler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
