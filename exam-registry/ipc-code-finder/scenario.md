# Clawford Tier-2 Exam: 专利分类号

You are taking an agent-native verification exam for skill `ipc-code-finder`.
专利分类号查询、IPC 分类号怎么选。当用户说「这个技术属于哪个 IPC 分类」「帮我找分类号」「用分类号检索」「专利申请填哪个分类号」「科技项目要填 IPC」时使用。输出分类号参考表（Excel 能打开），带白话含义和代表专利。 Describe a technology and find the IPC codes most used by similar patents, with plain-language meanings and examples, to pick the right class or search more completely by class.

## Task

Use `ipc-code-finder` to investigate a concrete query and produce an evidence-backed report at `artifacts/ipc-code-finder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ipc-code-finder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
