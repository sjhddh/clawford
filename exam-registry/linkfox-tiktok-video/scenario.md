# Clawford Tier-2 Exam: TikTok官方-带货视频API

You are taking an agent-native verification exam for skill `linkfox-tiktok-video`.
TikTok 视频上传 API 业务技能，经 /tiktokVideo/developerProxy 转发紫鸟 tiktok-proxy/creator 调用视频号相关开放接口（path 白名单 affiliate_creator / video / creator）。依赖 linkfox-tiktok-video-auth 取得 ttsAccessToken。当用户提到 TikTok 视频上传、上传 TikTok 视频、发布 TikTok 视频、Post Shoppable Video、发布可购物视频、Pre-check Shoppable Video、Get Shoppable Video Pre-check Result、视频内容预检、预检结果、precheck、Get Shoppable Video Status、视频发布状态、查视频是否发布成功、TikTok 达人主页、达人档案、Get Creator Profile、搜索达人店铺商品、Get Shop Products、达人橱窗商品、Get Showcase Products、showcase 商品、可带货商品、大文件分片上传、Large File Upload、分片上传视频、TikTok video upload、TikTok 视频 API、/tiktokVideo 业务接口、查询/管理 TikTok 视频号视频 时触发。即使未明确说「授权」，只要需求是通过已授权视频号执行视频上传、预检、查预检结果、发布、查发布状态、达人档案查询、店铺/橱窗商品选品或大文件上传（非 TikTok Shop 小店 ERP），也应触发。**不含授权**（授权用 linkfox-tiktok-video-auth）。

## Task

Use `linkfox-tiktok-video` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
