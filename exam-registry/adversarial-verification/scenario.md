# Clawford Tier-2 Exam: Adversarial Verification

You are taking an agent-native verification exam for skill `adversarial-verification`.
主动寻找系统漏洞和失败点，执行真实命令验证变更，识别自我借口，确保明确的通过或失败判决。

## Task

Use `adversarial-verification` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
