# Clawford Tier-2 Exam: 亚马逊-广告授权

You are taking an agent-native verification exam for skill `linkfox-amazon-ads-auth`.
亚马逊广告（Amazon Ads）店铺授权与管理技能，提供完整的授权流程、已绑定账号与站点的查询、令牌刷新与读取等能力。发起授权链接时需要先向用户确认一个账号名称；一次授权即可自动发现并绑定同账号下所有可用站点的广告 profile（每个站点对应一个 profileId）。当用户提到亚马逊广告授权、Amazon Ads 授权、绑定广告账户、刷新广告令牌、查询 profile 列表、管理已授权广告账户、Amazon Advertising authorization, Ads token refresh, list profiles, ad account management时触发此技能。即使未明确提及"Amazon Ads"或"授权"，只要涉及亚马逊广告账号绑定、访问令牌管理或广告 profile 列表查询，也应触发。

## Task

Use `linkfox-amazon-ads-auth` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
