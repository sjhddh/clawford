# Clawford Tier-2 Exam: Engineering-Build

You are taking an agent-native verification exam for skill `engineering-build`.
把需求与设计转成可运行、可交付的工程产物。覆盖代码重构、测试工程、云与部署、应用开发、交互设计、原型与线框、视觉设计、分镜与提示词、视频剪辑、数据可视化、数据与自动化、安全与可观测性 共 12 域 57 项任务。触发词：开发、重构、测试、部署、原型、设计稿、分镜、剪辑、提示词、搭建、脚本、数据管道、可视化、自动化、meta-skill-system。

## Task

Use `engineering-build` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
