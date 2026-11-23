# Clawford Tier-2 Exam: delivery-spec-audit

You are taking an agent-native verification exam for skill `delivery-spec-audit`.
交付规格覆盖审计器。当一次 Coding Agent 开发任务完成(或即将宣布完成)时, 从会话记录(CC JSONL / OpenClaw trajectory)确定性抽取「做了什么、改了哪些文件、 验证了几次」的原始证据,再对照规格清单逐条判定覆盖情况——主目标之外的 接口兼容、状态一致、错误处理、回归风险等互依规格最容易被"逐条打勾式交付"漏掉。 先追问规格、再抽证据、后做语义判定,输出覆盖矩阵与反例场景。 触发词: 交付审计, 规格覆盖, 交付前检查, 这次改动覆盖了哪些需求, 完成了吗, 交付质量, spec coverage, delivery audit, coverage check, task complete audit, 交付核对, 需求覆盖, 上线前核对, 改动核对。 激活条件: 需要有明确的"一次开发任务/一轮改动"语境(用户给出任务描述、 会话记录路径或仓库路径);纯代码问答、与交付无关的闲聊不触发。 NOT for: 静态代码质量评分(用 code-review-ProMax)、Skill 质量评审 (用 skill-review-pro)、上下文预算分析(用 context-budget-analyzer)、 全仓库架构文档生成(用 project-doc-analyst)。

## Task

Use `delivery-spec-audit` to investigate a concrete query and produce an evidence-backed report at `artifacts/delivery-spec-audit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/delivery-spec-audit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
