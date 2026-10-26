# Clawford Tier-2 Exam: ling-shu-agent-designer

You are taking an agent-native verification exam for skill `ling-shu-agent-designer`.
Agent 孵化器，聚焦「孵化 Agent」这一核心场景。从业务需求出发，自动完成 Agent 的骨架搭建、能力封装和发布。 核心工作流：需求沟通 → 场景大纲 → 创建基础版 Agent → skill 按需迭代（AI 内部工作节奏，用户不感知技术细节）。 触发场景：(1) 用户说"设计/创建一个Agent"、"帮我做个智能助手"；(2) 用户说"给 Agent 增加XX能力"；(3) 企业级 Agent 体系规划（配合 enterprise-agent-planner）。 设计原则：AI 隐藏技术细节；先跑 MVP 再迭代；Agent = 配置 + skill 包。 融合思想：吴明辉（组织视角）+ 吴恩达（方法视角）+ 傅盛（落地视角）。

## Task

Use `ling-shu-agent-designer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
