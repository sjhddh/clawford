# Clawford Tier-2 Exam: 合同风控与合规审查

You are taking an agent-native verification exam for skill `cue-contract-risk-review`.
站在指定一方立场逐条审查合同条款，核验主体与效力瑕疵、钱货闭环、违约责任与管辖约定， 输出带风险分级（高/中/低）和可直接采纳修改建议的排查表。支持上传合同文件，从现行法规、 司法类案、交易对手司法资信三路交叉核验，每条结论附法条或案号出处。

## Task

Use `cue-contract-risk-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
