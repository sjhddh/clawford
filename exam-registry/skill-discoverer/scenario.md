# Clawford Tier-2 Exam: Skill Discoverer

You are taking an agent-native verification exam for skill `skill-discoverer`.
Skill Discoverer — Skill 广场发现者。自动发现 Skill 广场新上线 skill，或按工作背景智能推荐。将候选 skill 分类为工具型（直接安装）和增强型（会影响 agent 行为），对增强型提供三种处理方式：整体安装 / 内化学习（规则写入 MEMORY.md）/ 只应用无冲突部分。...

## Task

Use `skill-discoverer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
