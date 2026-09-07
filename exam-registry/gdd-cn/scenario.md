# Clawford Tier-2 Exam: Game Design Document CN

You are taking an agent-native verification exam for skill `gdd-cn`.
中文游戏系统策划案（GDD）编写。按国内研发流程逐节推进：先对齐定位与竞品，再写规则、公式、配置表结构、边界、依赖、数值可调项、验收标准。数值优先落配置表，落笔前过一遍专家视角自检。触发词：写策划案、做系统策划案、GDD、系统拆解、配置表设计。

## Task

Use `gdd-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
