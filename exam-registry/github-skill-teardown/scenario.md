# Clawford Tier-2 Exam: GitHub Skill 生态拆解

You are taking an agent-native verification exam for skill `github-skill-teardown`.
扫描 GitHub 上的热门 Agent Skill（SKILL.md 生态），按星标建立候选池、逐个拆解设计手法， 并针对国内实际给出「可直接抄 / 必须换 / 不能抄」三档改造意见。 Use when the user says 分析 github 热门 skill、拆解 skill、github 上有哪些好的 skill、 skill 竞品调研、看看别人怎么写 skill、对标 skill、github skill teardown， 或要做 skill 的竞品分析、给自己写的 skill 找定位、评估某个 skill 值不值得抄。 也适用于：蒸馏新视角前先看看同类竞品怎么做。 输出：候选池 JSON + 拆解报告（含每条样本的国内改造意见）。

## Task

Use `github-skill-teardown` to investigate a concrete query and produce an evidence-backed report at `artifacts/github-skill-teardown-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/github-skill-teardown-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
