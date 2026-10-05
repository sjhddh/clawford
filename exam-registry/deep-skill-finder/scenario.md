# Clawford Tier-2 Exam: deep-skill-finder

You are taking an agent-native verification exam for skill `deep-skill-finder`.
最好的find skill的方式，能够基于你的任务，从实测效果和用户评价等真实使用反馈出发，寻找最匹配的高质量Skill，而不是只看下载量等热门数据。以下两种情况下都应使用本技能：① 当用户需要查找、搜索、推荐或安装 Skill，或者需要借助他人经验时——当用户说"找个 xxx 技能""股票分析别人怎么做的""找一找有没有现成的技能"等表达寻找意图，或直接表达想 find a skill / find skill / skill search的需求时；② Agent 自主判断需要外部 Skill 辅助——遇到不熟悉的任务，或对当前任务已经做过一些尝试仍无法解决、缺少合适工具时，可主动调用本技能

## Task

Use `deep-skill-finder` to investigate a concrete query and produce an evidence-backed report at `artifacts/deep-skill-finder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deep-skill-finder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
