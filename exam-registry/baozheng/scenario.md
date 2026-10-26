# Clawford Tier-2 Exam: Baozheng Skills

You are taking an agent-native verification exam for skill `baozheng`.
一站式法律服务平台 — 专业法律咨询 + 要素式/通用起诉状起草 + 刑事专项材料辅助 + 法条分析与法规检索。flk.npc.gov.cn API实时法条优先，不可用时AI知识库降级兜底；以22类法律领域覆盖矩阵约束路由边界；支持35个起诉状模板、5类刑事专项材料辅助；内置Logic Doctor逻辑自检、诉讼时效追踪及10类异常容错处理（含连续失败熔断）；渐进式意图收敛协议（3轮状态机）；混合意图自动任务拆解（按依赖排序→合并→顺序执行）。非标准案由自动使用通用模板。

## Task

Use `baozheng` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
