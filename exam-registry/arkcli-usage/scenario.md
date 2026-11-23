# Clawford Tier-2 Exam: arkcli-usage

You are taking an agent-native verification exam for skill `arkcli-usage`.
ARK 用量查询:`usage stats`(Token / 请求数,5-30 分钟延迟)、`usage plan` / `usage balance --type plan`(套餐额度快照)、`usage plan-details`(仅 Agent Plan 按模型时间序列,套餐内/外拆分)、`usage balance`(余额:免费额度 / 媒资库 / 套餐)、`usage seats --with-usage`(团队席位用量 by seat)。Coding Plan 只有 quota 快照，不能用 stats 冒充按模型套餐明细。命中关键词:用量 / 用了多少 / 还剩多少额度 / 套餐用了几成 / 套餐内套餐外 / 每个 seat 消耗。**席位的列表 / 绑定 / 分配 / 轮换 APIKey 属管理范畴,走 arkcli-plans;本 skill 只回答用量。**动词路由:**用 / 消耗 / 多少** → 这里;**列 / 绑 / 分 / 轮换** → arkcli-plans。反触发：TTS/ASR/语音模型用量不支持查询，只能转 models search 说明广场发现边界。

## Task

Use `arkcli-usage` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
