# Clawford Tier-2 Exam: energy-service-risk-inspect

You are taking an agent-native verification exam for skill `energy-service-risk-inspect`.
能源服务风险检查助理。输入 gitUrl、branch、specPrompt、reqId、odinNs、taskId、isTest、isPre、routeLabel，自动完成「获取克隆凭证 → 克隆代码 + mvn 编译 → 调用 spec 隐患检查（结构化输出）→ 上报结果（含 commitId）」全流程；隐患扫描结果固定上报，环境准备 / 编译失败也会把错误信息上报。触发：隐患扫描、代码隐患检查、spec 检查并上报、扫描某个 git 分支的隐患。运行配置支持同名入参覆盖（入参 > 环境变量 > prepare/env）。

## Task

Use `energy-service-risk-inspect` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
