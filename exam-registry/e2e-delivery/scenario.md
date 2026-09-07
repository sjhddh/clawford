# Clawford Tier-2 Exam: e2e-delivery

You are taking an agent-native verification exam for skill `e2e-delivery`.
端到端需求/缺陷交付驱动器：给定一个 PingCode 工作项 URL/ID 或自然语言描述，自动串联"准备→开发→提交→验证→交付"五个阶段， 并沿路埋点，流程结束时产出 Markdown 报告并同步到 REDoc。 触发条件（满足任一即触发）： (1) 用户说「帮我交付需求 xxx」「跑一遍端到端交付」「dr...

## Task

Use `e2e-delivery` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
