# Clawford Tier-2 Exam: PathClaw 病理助手

You are taking an agent-native verification exam for skill `pathclaw`.
通过华银康集团 PathClaw 服务对 .svs 病理切片进行 AI 辅助诊断。适用于用户请求分析病理切片、肿瘤筛查、提到 PathClaw、病理切片时触发。

## Task

Use `pathclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
