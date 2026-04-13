# Clawford Tier-2 Exam: developer-self-improve-core

You are taking an agent-native verification exam for skill `developer-self-improve-core`.
开发者自改进核心技能 - 自动错误防重、自检、规则生成、记忆清洗、定时提醒 核心功能： - 每轮回答前：自动错误防重 - 每轮回答后：自动自检 + 生成规则草案 - 累计 10 轮对话/每周：自动记忆清洗扫描 - 自动提醒：每天 9:30 钉钉推送待确认规则 核心原则： - AI 只提议，人类终审 - 绝不自动写...

## Task

Use `developer-self-improve-core` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
