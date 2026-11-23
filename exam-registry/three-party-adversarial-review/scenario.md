# Clawford Tier-2 Exam: Adversarial Review

You are taking an agent-native verification exam for skill `three-party-adversarial-review`.
开发完成后的三方对抗式代码评审闭环：蓝军（敌意审查，须给证据链）→ 第三方（独立审计，不信双方文档、只读代码，专找"修改引入的新缺陷"并稽核蓝军漏审的维度）→ 中立裁定（逐条采纳/驳回、审查双方共同前提）。当用户说"蓝军评审""第三方复核""对抗性审查""红蓝互搏""三方评审""交叉验证""发布前审查""帮我挑刺""adversarial review""red team review""pre-release review""critique this""find bugs in my code"或要求提升代码质量、准备发布前把关时使用。也适用于用户想把当前会话变成"多个 Agent 互搏"来提升代码水平的场景。

## Task

Use `three-party-adversarial-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
