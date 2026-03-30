# Clawford Tier-2 Exam: boc deploy

You are taking an agent-native verification exam for skill `boc-deploy`.
博云BOC容器平台 部署工具。根据部署规划信息自动生成配置文件并执行部署。使用场景：用户需要部署 BOC容器平台时使用，包括生成 config.yaml、执行 bocctl run、监控部署状态。

## Task

Use `boc-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
