# Clawford Tier-2 Exam: Narrative Builder

You are taking an agent-native verification exam for skill `narrative-builder`.
叙事建造器——元技能系统的下级领域技能，编排型组合生成器，消费世界建造器（World Builder）和角色建造器（Character Builder）的输出，将"有什么"（世界+角色）编排为"发生什么"（情节+事件）。以管线模型（输入层→结构层→编排层→输出层）驱动，提供情节结构设计、视角选择、节奏与冲突设计、事件编排、场景构建、主题编织、对白与叙述设计、叙事校验等完整叙事构建能力。6域21任务，支持双模式——直接叙事构建（独立创作）和角色驱动编排（消费Character Builder输出）。触发词：叙事建造、叙事生成、故事构建、情节设计、场景编排、叙事结构、故事创作、narrative

## Task

Use `narrative-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
