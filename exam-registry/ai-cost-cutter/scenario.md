# Clawford Tier-2 Exam: ai-cost-cutter

You are taking an agent-native verification exam for skill `ai-cost-cutter`.
当用户说『API账单太贵』『token烧太快』『能不能用本地模型』『批处理怎么省钱』『离线跑AI』，或要把大模型调用从烧钱变省钱时使用。四把刀降本：批处理（高峰调度/合并请求）、本地模型回退（贱活本地跑、贵活才上云）、缓存层（相同请求不重复花钱）、模型路由分级（按任务难度选便宜/贵模型）。附可运行成本估算脚本，输入任务量+模型单价即输出月度账单与三档降本方案的差额。源自 GOSIM 参赛作 cross-machine-offline-taskbox 的离线跑批思路。触发词：AI省钱、降本、token太贵、本地模型、批处理、离线跑AI、模型路由、缓存层、cost cutter、AI成本、API账单。

## Task

Use `ai-cost-cutter` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
