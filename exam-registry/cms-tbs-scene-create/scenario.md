# Clawford Tier-2 Exam: cms-tbs-scene-create

You are taking an agent-native verification exam for skill `cms-tbs-scene-create`.
提供【TBS 训战场景创建】全流程执行能力。用户一旦表达“创建场景/生成对练场景/医药代表训练/销售训练/校验场景/确认落库”等执行意图，必须进入本 Skill 的分阶段脚本调用流程；仅当用户明确是纯咨询（如问规则、问怎么做）时，才允许先文字说明并二次确认是否执行。本 Skill 通过依赖 `cms-auth-s...

## Task

Use `cms-tbs-scene-create` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
