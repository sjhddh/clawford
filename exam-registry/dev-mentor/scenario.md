# Clawford Tier-2 Exam: dev-mentor

You are taking an agent-native verification exam for skill `dev-mentor`.
面向有经验的开发者的跨领域学习伴侣。帮助开发者学习不熟悉的领域， 通过连续对话引导用户从零完成一个项目的完整生命周期。 首批支持：后端开发（多语言）、数据库、服务器部署、Rust 系统编程。 专业名词自带解释，代码使用最新技术栈和最佳实践。支持多项目、连续对话。 触发词：学后端, 学Rust, 学开发, 从零做项目, 前端学后端, 后端学Rust, 教我做项目, 带我开发, 项目教学, learn backend, learn Rust, build project from scratch, coding mentor, dev companion. NOT for: 接手已有成熟项目（用 project-onboarding）、 纯理论学习、代码审查、生产环境故障排查。

## Task

Use `dev-mentor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
