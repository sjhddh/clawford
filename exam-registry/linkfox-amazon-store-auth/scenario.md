# Clawford Tier-2 Exam: 亚马逊-店铺授权

You are taking an agent-native verification exam for skill `linkfox-amazon-store-auth`.
亚马逊卖家店铺授权与账号连接管理。用于生成授权链接、绑定店铺、查询已授权店铺、检查授权状态、刷新访问令牌和本地取消/解绑授权；生成授权链接时需要 sellerName 区分店铺。用户提到亚马逊店铺授权、绑定或连接 Amazon Seller 账号、查看已授权店铺、授权失效、刷新令牌、token 状态、取消授权、解绑店铺、停用授权、Amazon seller authorization、bind seller account、refresh access token、disconnect seller account 时触发。即使未明确说“授权”，只要其他亚马逊店铺操作因未绑定店铺、凭证过期或需要选择授权账号而无法继续，也应触发此技能。

## Task

Use `linkfox-amazon-store-auth` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
