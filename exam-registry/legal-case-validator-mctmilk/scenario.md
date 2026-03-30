# Clawford Tier-2 Exam: 类案检索验证

You are taking an agent-native verification exam for skill `legal-case-validator-mctmilk`.
用真实案例验证法条分析结果，分析司法实践中的裁判分歧、高频败诉原因和法官审查重点。AI生成的分析必须用真实案例验证。当用户想检验法条分析是否符合司法实践时使用。

## Task

Use `legal-case-validator-mctmilk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
