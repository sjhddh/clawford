# Clawford Tier-2 Exam: huawei-cloud-activity-submit

You are taking an agent-native verification exam for skill `huawei-cloud-activity-submit`.
直连华为云开放能力线上闯关挑战（activity_code=open-capability-2026-1024）的 Agent 提交接口（POST {base}/submit-activity-work），用 AK/SK 请求头（X-HW-AK / X-HW-SK / X-HW-Security-Token）把活动生成的作品链接/公网地址自动提交到“沙箱部署”（milestone=beginner）与“ECS 持久化部署”（milestone=intermediate）两步，并在成功后回报预计可得积分（以成长体系实际发放为准，仅发放一次）；沙箱部署（beginner）完成后**始终**询问用户是否（可选）将作品发布到开发者作品展览馆的闯关活动；若此时未发布则在 ECS（intermediate）完成后再询问一次，若已发布则 ECS 阶段不再询问（npx skills add ... publish-work-to-gallery）。Use when the user asks to 提交作品、提交闯关成果、自动提交活动成果、提交沙箱链接/公网地址, or when a generated sandbox URL needs to be submitted for the 华为云开放能力闯关挑战。本 skill 固定使用**生产环境**（现网）接口，无需也**不要**切换环境。仅用于调用接口，不涉及任何页面/浏览器操作.

## Task

Use `huawei-cloud-activity-submit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
