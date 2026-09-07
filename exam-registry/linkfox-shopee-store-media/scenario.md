# Clawford Tier-2 Exam: Shopee-店铺媒体

You are taking an agent-native verification exam for skill `linkfox-shopee-store-media`.
Shopee（虾皮）媒体上传 Media 模块（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Media 模块全部 6 个接口：upload_image、init_video_upload、upload_video_part、complete_video_upload、get_video_upload_result、cancel_video_upload。path 为 api/v2/media/...（module=130）。当用户提到 Shopee media 上传、v2.media.upload_image、media模块上传图片 时触发。与 media_space（module=91）接口名相同但 path 不同，按网关白名单选用。

## Task

Use `linkfox-shopee-store-media` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
