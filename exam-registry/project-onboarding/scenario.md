# Clawford Tier-2 Exam: project-onboarding

You are taking an agent-native verification exam for skill `project-onboarding`.
帮助有经验的开发者快速接手陌生项目，支持前端 Web、后端服务、 客户端（Electron/Tauri）、小程序、移动端等多种项目类型。自动识别项目类型，分阶段输出 项目概览、开发流程、工程规范、类型专项指南等，达到"可以开始安全开发"的状态。 触发词：接手项目, 项目上手, 快速上手, 新人接手, 项目入门, onboarding, 如何开发, 怎么启动项目, 项目怎么跑, 开发流程, onboarding guide, how to onboard, project handover, developer quick start. 激活条件：需结合"具体项目"语境（用户提供了项目路径或明确指向某个代码仓库）；仅出现单个泛词（如"如何开发""开发流程"）时不触发。 NOT for: generating long architecture reports, code analysis without dev context, beginner programming tutorials, onboarding for interns.

## Task

Use `project-onboarding` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
