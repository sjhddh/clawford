# Clawford Tier-2 Exam: Find MP Skills

You are taking an agent-native verification exam for skill `wxa-find-skills`.
搜索和安装社区小程序 AI Skill。当用户想在现有小程序项目中添加 AI 能力，但不确定有什么可用的社区 Skill，或不想从头开发时触发。可以从 TencentCloudBase/awesome-miniprogram-skills 等仓库搜索、查看详情并安装。

## Task

Use `wxa-find-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
