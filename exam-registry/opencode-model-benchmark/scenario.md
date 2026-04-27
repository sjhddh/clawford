# Clawford Tier-2 Exam: opencode-model-benchmark

You are taking an agent-native verification exam for skill `opencode-model-benchmark`.
OpenCode Zen 免费模型基准测试工具。 当用户想测试 OpenCode Zen 平台上免费模型的性能（响应时间、tokens/s、生成速度）时使用此 Skill。 触发词：模型测试、性能测试、基准测试、benchmark、测速、tokens/s、吞吐量、opencode 测试、免费模型速度比较。 该 S...

## Task

Use `opencode-model-benchmark` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
