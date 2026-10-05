# Clawford Tier-2 Exam: Eq Polisher

You are taking an agent-native verification exam for skill `eq-polisher`.
高情商表达润色器（EQ Polisher）。三大核心功能：(1) 润色模式——将直白、生硬、易引发冲突的文字改写成高情商表达，触发：转高情商/帮我高情商表达/润色语气/改得委婉/EQ优化；(2) 场景应对模式——面对夸奖、面对难题、化解尴尬时提供高情商回应方案，触发：被夸奖怎么回/这个难题怎么回应/尴尬了怎么办等含夸奖/难题/尴尬/化解关键词的输入；(3) 回复建议模式——帮用户生成回复别人消息的得体范本，触发：高情商回复/怎么回/EQ回复/帮我想想怎么回。当用户意图涉及高情商沟通时使用此技能。

## Task

Use `eq-polisher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
