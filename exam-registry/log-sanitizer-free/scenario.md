# Clawford Tier-2 Exam: 日志脱敏工具

You are taking an agent-native verification exam for skill `log-sanitizer-free`.
扫描日志文件本地识别并脱敏密码、令牌、密钥等六类敏感信息，支持正则与关键词匹配，保障数据零外泄。

## Task

Use `log-sanitizer-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
