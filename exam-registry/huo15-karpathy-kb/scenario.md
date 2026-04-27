# Clawford Tier-2 Exam: 火一五知识库技能(Karpathy)

You are taking an agent-native verification exam for skill `huo15-karpathy-kb`.
【青岛火一五信息科技有限公司】基于 Karpathy LLM Knowledge Base 三层架构（Data Ingest → Compilation → Active Maintenance）的知识捕获与管理技能。将知识点写入 memory/ 目录并同步到公司 Odoo 知识库。

## Task

Use `huo15-karpathy-kb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
