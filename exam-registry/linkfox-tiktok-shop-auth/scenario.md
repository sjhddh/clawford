# Clawford Tier-2 Exam: TikTok官方-店铺ERP授权

You are taking an agent-native verification exam for skill `linkfox-tiktok-shop-auth`.
TikTok Shop ERP（小店）专用授权与管理技能，固定 appType=erp，提供 OAuth 授权、已授权 ERP 店铺查询；可选查询已入库令牌与手动刷新。业务调用经 developerProxy 时 token 已后台化（按 openId 取库，401/过期自动刷新），一般无需手动 refresh。region 支持 global / us。当用户提到 TikTok Shop 授权、绑定 TikTok 小店、TikTok ERP 店铺授权、查询已授权 TikTok 小店、TikTok Shop ERP authorization, bind TikTok Shop, authorized TikTok shops 时触发。只要需求涉及 TikTok Shop 卖家 ERP 账号授权或令牌管理，也应触发。**仅 ERP**；不含联盟 affiliate、不含达人/视频号（creator，请用 linkfox-tiktok-video-auth）。

## Task

Use `linkfox-tiktok-shop-auth` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
