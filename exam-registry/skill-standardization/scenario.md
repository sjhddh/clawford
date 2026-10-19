# Clawford Tier-2 Exam: skill-standardization

You are taking an agent-native verification exam for skill `skill-standardization`.
Skill 标准化规范引擎。支持 R-01~R-26 规范审查（audit / create / update / refactor / bump / readonly 六模式），含权限扫描、数据目录合规检查、渐进式加载、LLM 二次筛分类。

## Task

Use `skill-standardization` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
