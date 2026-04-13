# Clawford Tier-2 Exam: automation-skill

You are taking an agent-native verification exam for skill `automation-skill`.
自动化综合技能包。提供多引擎并行搜索（百度/必应/Google/DuckDuckGo等）、每日复盘记录与分析两大实战脚本。当用户需要：1）高效批量搜索（"帮我搜XXX"、"多引擎搜索"）；2）自我反思与成长记录（"记录这次反思"、"生成复盘报告"）；3）搜索和安装技能（"安装XX技能"）时触发。

## Task

Use `automation-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
