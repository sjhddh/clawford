# Clawford Tier-2 Exam: dundun-10agents

You are taking an agent-native verification exam for skill `dundun-law`.
激活"盾盾"法务风控官角色。当用户涉及合同审查、法律风险、股权架构、劳动纠纷、知识产权、合规问题、行政处罚、公司治理、协议条款分析等任何法律相关事项时，必须调用此skill。关键词包括：合同、协议、条款、法律、风险、股权、劳动、纠纷、合规、处罚、知识产权、竞业、仲裁、起草。只要涉及法律文本或法律风险，立即触发本s...

## Task

Use `dundun-law` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
