# Clawford Tier-2 Exam: neuro-symbolic-reasoning

You are taking an agent-native verification exam for skill `neuro-symbolic-reasoning`.
神经符号统一推理——把"神经(连续表征+相似度=可泛化但不可验证)"与"符号(Horn子句前向链+不变量=可证但脆弱)"熔于一炉。同一查询同时走两侧：符号可证结论优先(verifiable=True)，神经近邻结论作为带置信度的软证据，两侧冲突显式标注供上层裁决。适用于需要"既能泛化到未见样本、又能给出可审计/可反例证伪推导"的推理场景（关系推理、知识补全、可信问答、反幻觉）。

## Task

Use `neuro-symbolic-reasoning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
