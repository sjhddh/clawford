# Clawford Tier-2 Exam: Huo15 Openclaw Openai Knowledge Base

You are taking an agent-native verification exam for skill `huo15-openclaw-openai-knowledge-base`.
火一五知识库技能 - 基于 Andrej Karpathy 的 LLM Knowledge Bases 方案。每个企微 Agent 独立隔离，自动在 Agent 工作目录下创建专属知识库。触发词：知识库、入库知识库、查询知识库、编译知识库、体检知识库、同步知识库、激活知识库。

## Task

Use `huo15-openclaw-openai-knowledge-base` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
