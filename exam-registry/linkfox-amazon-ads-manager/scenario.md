# Clawford Tier-2 Exam: 亚马逊-广告管理

You are taking an agent-native verification exam for skill `linkfox-amazon-ads-manager`.
亚马逊广告（Amazon Ads）管理技能，覆盖 SP/SB/SD 的查询与创建/修改。Sponsored Brands 同时支持 V3 Legacy 与 V4：新活动、多 Ad Group、Ad/Creative 默认走 V4，历史 Legacy 可显式走 V3，Keyword/Target 按 Campaign 结构通过版本化脚本调用 Amazon 共享 targeting 资源；禁止 V4 失败后自动回落 V3，禁止用 V3 静默截断多 Ad Group 数据。适用于查询、创建、调价、改预算、改状态及管理 SP/SB/SD 广告。本技能依赖 linkfox-amazon-ads-auth；不覆盖 Sponsored Television / DSP。

## Task

Use `linkfox-amazon-ads-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
