# Clawford Tier-2 Exam: skills creator

You are taking an agent-native verification exam for skill `meta-skill-generator`.
AI 技能自动生成框架。用于自动扫描、注册、检索、生成、评估、测试、优化技能。 触发场景： 1. 用户要求创建"技能工厂" 2. 需要检索/生成/评估技能 3. 需要测试/优化技能代码 状态：核心功能已完成 ⚠️ 注意：首次使用需运行 `python scripts/embed_skill.py` 重建向量搜索库

## Task

Use `meta-skill-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
