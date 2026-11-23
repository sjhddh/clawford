# Clawford Tier-2 Exam: chrome-qa-agent

You are taking an agent-native verification exam for skill `chrome-qa-agent`.
基于 chrome-devtools MCP 的对抗式 UI 测试。分析 git diff 只测改动部分，或探索整个应用找 bug。覆盖功能正确性、无障碍(a11y)、响应式布局与 UX 启发式。当用户要测试 UI 改动、QA 一个 PR、审计无障碍、或做探索式测试时使用。驱动真实本地 Chrome，本地与任意线上 URL 都适用。

## Task

Use `chrome-qa-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
