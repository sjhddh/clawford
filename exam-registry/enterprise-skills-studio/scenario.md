# Clawford Tier-2 Exam: enterprise-skills-studio

You are taking an agent-native verification exam for skill `enterprise-skills-studio`.
一套通用、跨平台的"技能工程台"，把企业最佳实践、业务流程与个人经验，结构化为 Agent 可调用、可治理、可复用的能力模块（受治理的业务工作流制品）。产出遵循 agentskills.io 开放标准，可在 WorkBuddy、Codex等桌面 Agent 间移植。覆盖技能全生命周期：学习理解 → 构建设计 → 个人转企业级 → 治理审查 → 安全审计 → 持续进化 → 跨平台适配 → 门户分发。内置 24 个能力模式 + 16 个可脚本工具，ROI 筛选、查重、评测套件等。安全侧借鉴SkillSpector 方法论，融合16 类审计与多种安全策略。支持自更新钉置，企业可禁用写盘或限定可信源。

## Task

Use `enterprise-skills-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
