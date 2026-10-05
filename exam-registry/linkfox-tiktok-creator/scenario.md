# Clawford Tier-2 Exam: TikTok官方-达人API

You are taking an agent-native verification exam for skill `linkfox-tiktok-creator`.
TikTok 达人（Creator/affiliate creator）数据与可购物视频技能，经 LinkFox 网关代理调用 TikTok Shop 达人开放接口：达人主页/档案、达人绑定店铺商品、橱窗商品、可购物视频的上传/内容预检/发布/发布状态查询。需要达人 access_token（user_type=1），由 linkfox-tiktok-video-auth 完成达人授权后取得。当用户提到 TikTok 达人、TikTok creator、达人主页、达人档案、达人资料、达人店铺商品、达人绑定店铺商品、达人橱窗商品、showcase 商品、上传可购物视频、发布可购物视频、视频发布状态、视频内容预检、shoppable video、affiliate creator、TikTok 带货达人信息、TikTok creator profile、shop products、showcase products、post shoppable video、video status、precheck 时触发此技能。即使用户未写 EHunt/紫鸟，只要需求是查 TikTok Shop 达人的资料、绑定商品或可购物视频带货操作，也应触发。**不含达人授权**（授权请用 linkfox-tiktok-video-auth）。

## Task

Use `linkfox-tiktok-creator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
