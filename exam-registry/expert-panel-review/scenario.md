# Clawford Tier-2 Exam: 专家会诊团

You are taking an agent-native verification exam for skill `expert-panel-review`.
把一份方案、文档或决策同时交给 3–5 个立场冲突的专家视角审， 产出「共识 / 分歧 / 盲区 / 若只改一条」四段结论，让拍板前的漏洞先浮出来。 当用户说「让几个专家看看」「多角度审一下」「会诊一下」「帮我挑毛病」 「这个方案有什么问题」「换个角度看看有没有坑」「拍板前再过一遍」时使用。 和"专家团协作"不是一回事：不开会、不分工、不投票、不画流程图， 只做视角并置与分歧显性化——价值在于暴露单一视角的盲区，不在于模拟团队协作。 不适用于：事实核查（该去查资料）、只需一个专业判断的任务、 已有明确标准答案的问题、以及任何需要真人资质背书的最终决策。 Use when: multi-perspective review, expert panel, devil's advocate, red team, second opinion, 多角度审, 会诊, 挑毛病, 换个角度, 拍板前。

## Task

Use `expert-panel-review` to investigate a concrete query and produce an evidence-backed report at `artifacts/expert-panel-review-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/expert-panel-review-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
