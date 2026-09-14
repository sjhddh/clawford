# Clawford Tier-2 Exam: upload-test-skill

You are taking an agent-native verification exam for skill `upload-test-skill`.
用于测试 Skill 上传、识别、触发和基础输出链路。当用户要求“测试 skill 是否上传成功”“验证 skill 触发”“跑一遍上传测试”“upload test skill”时使用。该 Skill 只处理脱敏测试文本，不调用外部系统，不读取真实业务数据。

## Task

Use `upload-test-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
