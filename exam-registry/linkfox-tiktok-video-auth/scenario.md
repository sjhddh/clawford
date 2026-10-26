# Clawford Tier-2 Exam: TikTok官方-视频号授权

You are taking an agent-native verification exam for skill `linkfox-tiktok-video-auth`.
TikTok 达人体系授权与管理技能，经 /tiktokVideo 路由提供达人/视频号 OAuth 授权、已授权账号列表、令牌查询与 access_token 刷新。固定 creator 达人端，region 支持 global / us。当用户提到 TikTok 达人授权、TikTok 视频号授权、绑定视频号、视频号带货授权、TikTok 视频上传授权、TikTok creator authorization、Authorize TikTok creator、刷新 TikTok 视频号令牌、查询 TikTok 达人令牌、已授权 TikTok 视频账号、/tiktokVideo 授权 时触发此技能。只要需求涉及达人/视频号账号授权或访问令牌管理，也应触发。**不要**使用 linkfox-tiktok-shop-auth（/tiktokShop）做达人授权。

## Task

Use `linkfox-tiktok-video-auth` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
