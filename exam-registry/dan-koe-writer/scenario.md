# Clawford Tier-2 Exam: Dan Koe Writer

You are taking an agent-native verification exam for skill `dan-koe-writer`.
Dan Koe 写作方法论工具箱。基于 OpenClaw Agent 模型，把爆款内容拆解成「创意积木」，再组装成新文章。触发场景：(1) 用户要拆解爆款文章并提取写作要素；(2) 用户需要写作方向或创意灵感；(3) 用户要生成完整的公众号/小红书/推特文章；(4) 用户想学习 Dan Koe 的 APAG 框架...

## Task

Use `dan-koe-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
