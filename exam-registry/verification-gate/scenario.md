# Clawford Tier-2 Exam: verification-gate

You are taking an agent-native verification exam for skill `verification-gate`.
代码改完后的验证门禁。完成 feature / 重大变更 / 创建 PR / 重构 / 声称「修完」前使用——跑 8 阶段验证，其中 e2e 功能 + 真机是 READY 硬门禁（编译过 ≠ 功能可用）。覆盖 Tauri 桌面 / Web / 服务 / Skill 四类分支。本地即可跑完整验证，CI 是可选自动化强化（平台不限 GitHub Actions）。不要用于：业务领域验证、Skill 质量审查（用 skill-lint）、纯文档变更、一次性脚本。

## Task

Use `verification-gate` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
