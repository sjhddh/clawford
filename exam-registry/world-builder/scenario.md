# Clawford Tier-2 Exam: World Builder

You are taking an agent-native verification exam for skill `world-builder`.
世界建造器——元技能系统的下级母技能，支持双模式——独立生成（从无到有构建完整世界）和角色提取（从多个Character Builder角色中提取共享世界层）——从任意世界概念或角色群生成完整世界Skill。以世界=实体层×社会层×抽象层的三层12维正交模型（实体层：空间/时间/法则/生命/物质/技术；社会层：文化/政治/经济；抽象层：认知/审美/动态）系统填充，输出内嵌管线编排、三轴判定、领域校准、降级模式等可执行能力的世界Skill文件。触发词：生成世界、创建世界、世界构建、世界观、world building、世界设计、架空世界、虚构世界、meta-skill-system

## Task

Use `world-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
