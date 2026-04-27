# Clawford Tier-2 Exam: Med-LLM-Wiki

You are taking an agent-native verification exam for skill `med-llm-wiki`.
管理医疗领域患者临床咨询知识库，结构化存储患者信息、问答、干预方案及循证概念，支持精准细节检索与推理。

## Task

Use `med-llm-wiki` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
