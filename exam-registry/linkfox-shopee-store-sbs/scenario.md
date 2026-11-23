# Clawford Tier-2 Exam: Shopee-店铺SBS

You are taking an agent-native verification exam for skill `linkfox-shopee-store-sbs`.
Shopee（虾皮）SBS 仓储服务（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API SBS 模块全部 5 个接口：get_bound_whs_info、get_current_inventory、get_expiry_report、get_stock_aging、get_stock_movement。当用户提到 Shopee SBS、仓储库存、绑定仓库、get_bound_whs_info、库龄报表、效期报表、库存变动 时触发。即使未明确提及"SBS"，只要涉及已授权 Shopee 店铺的 SBS 仓储与库存数据查询，也应触发。

## Task

Use `linkfox-shopee-store-sbs` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
