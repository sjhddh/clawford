# Clawford Tier-2 Exam: skill-release-gate

You are taking an agent-native verification exam for skill `skill-release-gate`.
所有 skill / MCP / 专家上架前必过的"上架三铁律"发布闸门——① 国家+国际合规 ② AI 特别友好 ③ 理念文化·强IP·好故事。含 A/B/C/D 分级加闸、GB45438 内容标识、五件套植入规范。内置可离线运行的安全扫描执行器（PII/密钥扫描、去敏复核）。

## Task

Use `skill-release-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
