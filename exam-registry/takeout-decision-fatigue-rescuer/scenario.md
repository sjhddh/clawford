# Clawford Tier-2 Exam: takeout-decision-fatigue-rescuer

You are taking an agent-native verification exam for skill `takeout-decision-fatigue-rescuer`.
外卖点餐"决策疲劳"拯救者。 当用户打开外卖软件面对大量选项无法抉择时调用此 Skill。 根据用户设定的预算范围、忌口清单和当前饥饿程度，将海量选项过滤为 Top3 精准推荐（店名+菜品+总价），将决策时间从 10 分钟压缩到 30 秒。 触发场景：用户表达"不知道吃什么""选择太多""外卖纠结""中午吃啥"等决策困难。

## Task

Use `takeout-decision-fatigue-rescuer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
