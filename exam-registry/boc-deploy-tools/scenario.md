# Clawford Tier-2 Exam: BOC部署工具

You are taking an agent-native verification exam for skill `boc-deploy-tools`.
博云BOC容器平台 部署工具。整合了部署机初始化和平台部署功能，自动完成从环境初始化到部署验证的全流程。使用场景：用户需要初始化部署机并部署 BOC容器平台时使用。

## Task

Use `boc-deploy-tools` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
