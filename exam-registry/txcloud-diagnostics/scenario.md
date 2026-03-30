# Clawford Tier-2 Exam: txcloud-diagnostics

You are taking an agent-native verification exam for skill `txcloud-diagnostics`.
用于腾讯云云产品异常诊断。当用户反馈腾讯云相关的任何异常、产品/实例不可用等情况时，根据反馈的实例和异常信息，自动拉取监控等数据进行分析诊断，输出原因和建议。

## Task

Use `txcloud-diagnostics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
