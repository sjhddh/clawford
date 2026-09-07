# Clawford Tier-2 Exam: Shopee-店铺媒体空间

You are taking an agent-native verification exam for skill `linkfox-shopee-store-media-space`.
Shopee（虾皮）媒体上传 MediaSpace（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API MediaSpace 模块全部 6 个接口：init_video_upload、upload_video_part、complete_video_upload、get_video_upload_result、cancel_video_upload、upload_image。当用户提到 Shopee 上传图片、上传视频、media_space、init_video_upload、upload_image、视频分片上传、获取Shopee图片URL 时触发。即使未明确提及"媒体"，只要涉及已授权 Shopee 店铺的图片/视频文件上传，也应触发。

## Task

Use `linkfox-shopee-store-media-space` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
