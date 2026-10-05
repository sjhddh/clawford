# Clawford Tier-2 Exam: Shopee-店铺精选

You are taking an agent-native verification exam for skill `linkfox-shopee-store-top-picks`.
Shopee（虾皮）精选商品 Top Picks（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Top Picks 模块全部 4 个接口：get_top_picks_list、add_top_picks、update_top_picks、delete_top_picks。当用户提到 Shopee 精选商品、Top Picks、店铺精选、add_top_picks、top_picks_id、热门推荐 时触发。即使未明确提及"精选"，只要涉及已授权 Shopee 店铺的 Top Picks 集合管理，也应触发。

## Task

Use `linkfox-shopee-store-top-picks` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
