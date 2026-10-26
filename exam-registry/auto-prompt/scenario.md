# Clawford Tier-2 Exam: auto-prompt

You are taking an agent-native verification exam for skill `auto-prompt`.
策略先行的解题协议（fore.vip）。用户抛出一个主题、问题或想法（要做的事、卡住的问题、想要的结果）时，先出一份最佳策略卡——按「本机已有资产 → 模型自有知识 → 主题相关官方文档 → 主题 T1 社区 → 搜索引擎」逐级做复用检查、命中即停，取最短路径；再拿策略回看原问题做一轮对抗式审视（是否答非所问 / 是否还有更短路径 / 是否跳级凭记忆作答 / 产物是否超纲），最多回炉一轮；然后按策略执行、结论先行地精简交付；问题解决后按「四问」判据把关键点沉淀进记忆（跨会话可复用、是事实而非过程、不与既有条目重复、低熵），碎片与流水账不写。当用户说「XX 怎么做」「帮我搞定 XX」「这个问题怎

## Task

Use `auto-prompt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
