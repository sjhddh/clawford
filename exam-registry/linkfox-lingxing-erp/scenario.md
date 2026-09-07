# Clawford Tier-2 Exam: 领星ERP

You are taking an agent-native verification exam for skill `linkfox-lingxing-erp`.
LinkFox 包装的领星（Lingxing）ERP 技能「linkfox-lingxing-erp」：由 LinkFox Skills 仓库收录分发，封装领星官方 OpenAPI 文档与脚本用法，底层仍直连 openapi.lingxing.com（非 LinkFox 自建网关）。覆盖约 373 个接口场景，含广告报表 SP/SB/SD、订单与 Listing、库存仓库、财务与 FBA、源表、采购、客服、多平台广告与订单等。当用户提到领星、Lingxing、领星开放接口、领星 ERP 数据、领星广告报表、领星订单/库存/利润、领星 SID、Lingxing OpenAPI、Lingxing ERP data、LinkFox 领星、linkfox-lingxing-erp 时触发。分模块参数见 references/api.md 及各 references/*.md；需 LINGXING_APP_ID 与 LINGXING_APP_SECRET。

## Task

Use `linkfox-lingxing-erp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
