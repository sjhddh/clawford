# Clawford Tier-2 Exam: Good Name Skill

You are taking an agent-native verification exam for skill `good-name-skill`.
专业命名技能，用于中文个人取名、英文个人取名、公司/品牌命名，以及基于新增约束的多轮改名优化。当用户要求给宝宝、个人、英文身份、公司、品牌、产品线起名，或要求在指定含义、字母、风格、五行、行业、关键词等条件下重生成候选名时使用。先补齐关键信息，再读取对应 reference，输出至少 5 个带释义、推荐理由与风险...

## Task

Use `good-name-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
