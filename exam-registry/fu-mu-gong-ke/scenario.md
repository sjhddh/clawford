# Clawford Tier-2 Exam: Fu Mu Gong Ke

You are taking an agent-native verification exam for skill `fu-mu-gong-ke`.
父母的功课 — 育儿心理学对话支持技能（心虫增强版）。 提供结构化对话支持、情绪识别、场景匹配、安全检测。 本技能包含可选Python脚本（scripts/目录），部分脚本在SKILL_DIR/data/目录下存储本地统计数据（评估历史、洞察记录、会话状态），不对外传输。 ⚠️ 注意：本技能不替代专业心理咨询、心...

## Task

Use `fu-mu-gong-ke` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
