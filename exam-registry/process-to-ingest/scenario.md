# Clawford Tier-2 Exam: Process to Ingest Runbook

You are taking an agent-native verification exam for skill `process-to-ingest`.
端到端运行手册：先用 workflow-structurer 把一份数字内容梳理成结构化流程文档，再按 demo-asset-ingest 规范打包并通过 clawhub publish 入库到 ClawHub 资源中心。适用：把可用数字内容沉淀为可检索、可安装资源，且需要可复现步骤。

## Task

Use `process-to-ingest` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
