# Clawford Tier-2 Exam: prompt-injection-shield

You are taking an agent-native verification exam for skill `prompt-injection-shield`.
提示注入防护 — 在不可信内容进上下文之前先扫描：中英双语文式库（忽略指令/角色劫持/越狱/DAN/索要系统提示）+ 启发式 + 沙箱规则，输出风险分·命中规则·处置建议。

## Task

Use `prompt-injection-shield` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
