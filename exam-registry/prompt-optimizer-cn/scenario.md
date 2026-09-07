# Clawford Tier-2 Exam: Prompt Optimizer Cn

You are taking an agent-native verification exam for skill `prompt-optimizer-cn`.
实用提示词优化工具 - 检测原提示词缺失要素（角色/步骤/格式/约束），智能补全后输出清晰易懂的优化版，帮助用户的意图更容易被 AI 理解执行。Use when user says 优化提示词 / 改进prompt / 优化一下 / optimize prompt.

## Task

Use `prompt-optimizer-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
