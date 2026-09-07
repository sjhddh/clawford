# Clawford Tier-2 Exam: deep-skill-finder

You are taking an agent-native verification exam for skill `deep-skill-finder`.
最好的找Skill的方式，能够基于你的任务，去寻找最匹配的高质量Skill。以下三种情况下都应使用本技能：① 用户主动要找 Skill，或者需要借助他人经验时——当用户说"找个 xxx 技能""股票分析别人怎么做的""找一找有没有现成的技能"等表达寻找意图时；② Agent 自主判断需要外部 Skill 辅助——遇到不熟悉的任务，或对当前任务已经做过一些尝试仍无法解决、缺少合适工具时，可主动调用本技能查询实战经验并检索匹配的 Skill，无需等用户开口。③ 用户说"评价技能""给 Skill 打分""反馈某个 Skill"，或需要从当前 Agent 最近 30 天 trajectory 中选择

## Task

Use `deep-skill-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
