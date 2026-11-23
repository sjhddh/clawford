# Clawford Tier-2 Exam: arkcli-plans

You are taking an agent-native verification exam for skill `arkcli-plans`.
ARK 套餐管理(Agent Plan / Coding Plan,个人版 + 企业版):查询持有 / 购买 / 续费 / 模型清单 / 轮换 APIKey,**以及企业版席位的全部管理操作**:列出席位(`plans team seat-list`)、给员工分配席位(`plans team seat-assign`)、查谁绑了哪个 seat、轮换席位 APIKey(`plans team rotate-apikey`)。也负责购买参数的逐步澄清，以及 `payment_failed` + Order ID 后回到已有订单补单/取消，禁止重新 buy。命中关键词:套餐 / 买 / 续费 / 列席位 / 看 seat 绑定 / 谁绑了哪个 seat / 给员工分席位 / 解绑 / 团队席位 admin 视图 / 轮换 APIKey。反触发：Token 额度包/资源包不是 Agent Plan/Coding Plan，应走 arkcli-profile 判断 platform 切面。**用量类问题(还剩多少额度 / 用了几成 / 每个 seat 用了多少)走 [arkcli-usage](../arkcli-usage/SKILL.md)。**动词路由:**列 / 绑 / 分 / 轮换 / 解绑** → 这里;**用 / 消耗 / 多少** → arkcli-usage。另含 harness-status:只读查看本机 AI Agent(claude-code/codex/opencode/openclaw/trae)上 Agent Plan 内置 MCP(豆包搜索/dataPro/OpenViking)装没装、key 就没就绪;命中:我的 MCP 装好了吗 / 查 MCP 安装状态 / 看 agent 上的 MCP / harness 状态。

## Task

Use `arkcli-plans` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
