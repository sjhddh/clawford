# Clawford Tier-2 Exam: Product Judgment

You are taking an agent-native verification exam for skill `product-judgment-skill`.
先判断需求，再写 PRD。

我把《俞军产品方法论》中的核心产品判断方法，转化成了 Agent 可以直接执行的需求评审流程。

核心是回答一个问题：这个需求到底值不值得做？

这是一个 Agent Skill（SKILL.md），供产品经理和 AI Agent 在写 PRD 之前评审需求或产品想法；通过 npx skills add 安装，可用于 Claude Code、Codex 或其他支持 Skill 的 Agent 工作流。

## Task

Use `product-judgment-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/product-judgment-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/product-judgment-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
