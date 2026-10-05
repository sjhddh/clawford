# Clawford Tier-2 Exam: migration-verify

You are taking an agent-native verification exam for skill `migration-verify`.
迁移验证·压力测试。迁移/换机/新环境后，极致压测确认"完整的你"——记忆文件全不全、skill 能不能用、工具好不好、环境缺不缺、依赖少没少、克隆体正常吗。触发词：验证迁移、体检、压测、全不全、换机检查、migration verify。

## Task

Use `migration-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
