# Clawford Tier-2 Exam: Autohome

You are taking an agent-native verification exam for skill `autohome`.
汽车资讯获取技能，用于获取汽车之家最新资讯并格式化输出。触发关键词：汽车、汽车资讯、汽车新闻、汽车行业、汽车之家、autohome、新车发布、汽车动态、车市新闻、汽车市场、新能源车、电动车、燃油车、SUV、轿车、MPV、跑车、豪华车。当用户提到这些关键词时使用此技能。支持定时任务配置、格式化输出、带链接的资讯摘要。

## Task

Use `autohome` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
