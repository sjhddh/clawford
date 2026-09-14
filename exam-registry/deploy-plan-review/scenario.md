# Clawford Tier-2 Exam: 变更方案自动审核助手

You are taking an agent-native verification exam for skill `deploy-plan-review`.
变更方案自动审核助手 — 全员开放；变更方案docx必须提供，部署表xlsx默认必须提供（除非用户明确不要部署表）；以/home/deploy_template下模板为基准，优先按方案文件名关键词定位模板；默认返回精简Markdown并保存Word报告

## Task

Use `deploy-plan-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
