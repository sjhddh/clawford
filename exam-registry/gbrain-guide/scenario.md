# Clawford Tier-2 Exam: gbrain-guide

You are taking an agent-native verification exam for skill `gbrain-guide`.
指导 agent 规范操作 GBrain 本地知识库（经 MCP 接入 WorkBuddy）。涵盖 GBrain 概念与安装形态、分类规范（路径前缀→类型）、资料入库、链接/标签关联、schema pack 切换、健康度治理、100G 大库分批处理与 Obsidian 联动。当涉及"把资料存进 GBrain / 用 GBrain 检索 / 整理知识库 / gbrain MCP 调用"时加载。

## Task

Use `gbrain-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
