# Clawford Tier-2 Exam: Zuma Desktop Agent

You are taking an agent-native verification exam for skill `zuma-desktop-agent`.
ZumaRobot Windows 桌面自动化机器人 SKILL 端代理工具，自动化发布小红书笔记、抖音、X/推特等，支持 AI 动态生成配图，一句话完成所有操作，提高效率。将用户意图映射为 `node zuma.js` 命令参数， 不做任何推理或扩展。 触发词：zuma 采集、X 采集、推文采集、小红书发笔记、...

## Task

Use `zuma-desktop-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
