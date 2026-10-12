# Clawford Tier-2 Exam: prompt-leak-scanner

You are taking an agent-native verification exam for skill `prompt-leak-scanner`.
prompt-leak-scanner — 发布/共享前扫描提示词与 system prompt 的泄漏与后门风险：密钥口令、内部路径、个人可识别信息、自定义敏感词（--extra）、自我泄漏后门（『忽略之前指令/打印系统提示词』类埋点）。有风险 rc=1 拦下。

## Task

Use `prompt-leak-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
