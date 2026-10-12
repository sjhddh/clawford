# Clawford Tier-2 Exam: xianmubox-dev

You are taking an agent-native verification exam for skill `xianmubox-dev`.
闲沐盒子（本仓库）全流程开发工作流——需求梳理、方案制定、实施开发、设备调试、上传部署。凡在本项目提出新功能、新模式、界面改版、修 bug、真机排查、推送设备、构建部署等开发请求时使用，即使用户没有明说"走流程"；本 skill 规定各阶段的门禁与命令，跳过阶段会违反项目强制约定（UI 先仿真、test.py 全绿、文档同批同步、禁 GUI 提交）。

## Task

Use `xianmubox-dev` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
