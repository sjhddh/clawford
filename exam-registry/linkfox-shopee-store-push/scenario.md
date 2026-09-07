# Clawford Tier-2 Exam: Shopee-店铺推送

You are taking an agent-native verification exam for skill `linkfox-shopee-store-push`.
Shopee（虾皮）Push 推送机制（与 linkfox-shopee-store-auth 同系列），经 /shopee/developerProxy 转发 Shopee Open API Push 模块全部 4 个接口：set_app_push_config、get_app_push_config、get_lost_push_message、confirm_consumed_lost_push_message。当用户提到 Shopee Push、推送回调、Push Mechanism、set_app_push_config、丢失推送补推、webhook 配置 时触发。即使未明确提及"Push"，只要涉及 Shopee 开放平台 Push 配置或补推消息管理，也应触发。

## Task

Use `linkfox-shopee-store-push` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
