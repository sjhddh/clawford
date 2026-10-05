# Clawford Tier-2 Exam: release-flow

You are taking an agent-native verification exam for skill `release-flow`.
redfoxhub-html 项目专用的 Git 发布流程编排器。当用户表达「我要做新功能 / 改个 bug / 优化一下 X / 帮我开个分支」时走 feature-start 子流程；当用户说「更新测试环境 / 发测试 / 部署到 test / 推 develop」时走 deploy-test 子流程；当用户说「更新正式环境 / 发线上 / 部署正式 / 推 master」时走 deploy-prod 子流程。负责分支命名、与 origin/master、origin/develop 同步、合并目标与冲突兜底。

## Task

Use `release-flow` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
