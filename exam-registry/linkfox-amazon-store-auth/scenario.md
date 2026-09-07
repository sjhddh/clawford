# Clawford Tier-2 Exam: 亚马逊-店铺授权

You are taking an agent-native verification exam for skill `linkfox-amazon-store-auth`.
亚马逊店铺授权与管理技能，提供完整的授权流程、令牌刷新、已授权店铺查询以及授权状态查询能力。获取授权链接时店铺名 sellerName 为必填，用于区分已授权店铺。当用户提到亚马逊店铺授权、绑定亚马逊店铺、刷新令牌、查询店铺授权状态、管理授权店铺、Amazon seller authorization, bind Amazon seller account, refresh access token, query store token status, manage authorized stores时触发此技能。只要其需求涉及亚马逊卖家账号授权、令牌生命周期管理或店铺列表查询，也应触发此技能。

## Task

Use `linkfox-amazon-store-auth` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-store-auth-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-store-auth-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
