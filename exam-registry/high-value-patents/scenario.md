# Clawford Tier-2 Exam: 高价值专利

You are taking an agent-native verification exam for skill `high-value-patents`.
高价值专利筛选、核心专利识别。当用户说「这个领域的核心专利有哪些」「帮我挑出公司最有价值的专利」「哪些专利值得重点保护 / 收购」「高价值专利培育要选哪些」「专利质押 / 评估前先筛一遍」时使用。输出高价值专利清单（Excel 能打开），每件附入选理由。 Screens a technology area or a company portfolio for high-value patents using visible indicators such as long maintenance, citations, ranking and claim breadth, with the reason for each pick.

## Task

Use `high-value-patents` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
