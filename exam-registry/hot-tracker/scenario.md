# Clawford Tier-2 Exam: hot-tracker

You are taking an agent-native verification exam for skill `hot-tracker`.
全网热点客观扫描与去噪排行技能。用于在微博、抖音、小红书、微信公众号、知乎、B站、快手等平台之间抓取当前热点，按讨论度、传播度、转发度、情绪强度、对立程度和时效性综合排序，输出默认 Top10 的去噪热点清单。适用于“最近什么最热”“帮我抓全网热点”“按当前话题度排行”“找高讨论度话题”“做热点监测”这类请求。默...

## Task

Use `hot-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
