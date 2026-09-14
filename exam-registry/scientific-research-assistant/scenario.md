# Clawford Tier-2 Exam: 科研助手

You are taking an agent-native verification exam for skill `scientific-research-assistant`.
科研助手基于134个科学技能库,提供从文献检索到论文发表的全流程科研支持,核心功能包括文献检索与综述(PubMed/Google Scholar/arXiv)、数据分析与可视化(统计/生信/绘图)、药物发现流程(靶点/筛选/对接/ADMET)、论文写作与发表(IMRaD/投稿/Cover。134个科学技能库,从文献检索到论文写作,科研全流程AI辅助。科研助手基于134个科学技能库,提供从文献检索到论文发表的全流程科研支持,核心功能包括文献检索与综述(PubMed/Google 功能涵盖: scientific, research, assistant。

## Task

Use `scientific-research-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/scientific-research-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/scientific-research-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
