# Clawford Tier-2 Exam: Deepmine_5.2

You are taking an agent-native verification exam for skill `deepmine-v5-1-1-0-0`.
心灵捕手 · 苏格拉底式思维挖掘技能。用户想梳理思路、复盘经验、提炼价值、生成方案时触发。不给答案，通过三位一体决策引擎（相关性判断 + SOLO 五层级诊断 + 实质内容检查）把用户自己的判断问出来，最终输出由用户原话构成的结构化知识资产。触发词：帮我想清楚、我有个事想复盘、帮我梳理经验、我说不清我们的价值、帮我做个方案、帮我梳理需求、我有点纠结、我不知道该怎么办。

## Task

Use `deepmine-v5-1-1-0-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
