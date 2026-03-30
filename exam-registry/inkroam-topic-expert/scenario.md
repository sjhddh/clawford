# Clawford Tier-2 Exam: Topic Selection Expert

You are taking an agent-native verification exam for skill `inkroam-topic-expert`.
选题专家：全网热点监控 → 筛选打分 → 初步三要素 → 写入飞书选题库 → 推送Telegram。Use when user asks to 启动选题专家 / 获取选题推荐 / 查看热点 / 帮我选题。

## Task

Use `inkroam-topic-expert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
