# Clawford Tier-2 Exam: reason-verify

You are taking an agent-native verification exam for skill `reason-verify`.
可靠推理与自验证：对推理结果做命题抽取、矛盾检测、覆盖度评估与事实锚定校验，输出可验证的结论，纯Python零依赖。当需要"验证推理是否正确""自查答案""检测逻辑矛盾""reason-verify"时使用。

## Task

Use `reason-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
