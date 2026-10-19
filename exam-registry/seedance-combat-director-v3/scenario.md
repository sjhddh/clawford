# Clawford Tier-2 Exam: seedance-combat-director

You are taking an agent-native verification exam for skill `seedance-combat-director-v3`.
为 Seedance 2.5 设计、诊断、续接和重写通用动作/打斗视频提示词。覆盖徒手格斗、武器对决、一对多、团队连携、Boss战、追逐战、现代动作、武侠、奇幻、科幻、动画/CG等。严格执行“先补齐必要输入，再生成提示词”；基于成片修改时必须先实际检查视频证据，不得凭历史对话或旧提示词猜测。

## Task

Use `seedance-combat-director-v3` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
