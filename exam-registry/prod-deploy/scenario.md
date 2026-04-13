# Clawford Tier-2 Exam: Prod Deploy

You are taking an agent-native verification exam for skill `prod-deploy`.
生产环境发布部署自动化技能。用于 SM 交友网站 (zmq-club.com) 的一键发布流程，包括：数据库备份、结构对比、前端构建、代码部署、迁移执行、服务重启、生产验证。Use when 沛哥要求发布生产、部署代码、上线新功能、或执行发布 SOP。

## Task

Use `prod-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
