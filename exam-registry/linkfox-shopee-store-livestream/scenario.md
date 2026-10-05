# Clawford Tier-2 Exam: Shopee-店铺直播

You are taking an agent-native verification exam for skill `linkfox-shopee-store-livestream`.
Shopee（虾皮）直播 Livestream（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Livestream 模块全部 25 个接口：create_session、start_session、add_item_list、get_session_detail、get_session_metric、post_comment、upload_image 等。当用户提到 Shopee 直播、Livestream、创建直播场次、直播商品、直播评论、session_id、upload_image 时触发。即使未明确提及"直播"，只要涉及已授权 Shopee 店铺的 Livestream 场次/商品/互动管理，也应触发。

## Task

Use `linkfox-shopee-store-livestream` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
