# Clawford Tier-2 Exam: FMEA分析技能

You are taking an agent-native verification exam for skill `skill-fmea-assistant`.
辅助FMEA 2019版分析；帮助用户完成失效模式识别、RPN计算、风险等级评估与预防措施跟踪；支持DFMEA、PFMEA、SFMEA全场景

## Task

Use `skill-fmea-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
