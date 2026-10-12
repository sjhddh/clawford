# Clawford Tier-2 Exam: 工具编排器

You are taking an agent-native verification exam for skill `tool-orchestrator`.
工具编排器是一个端到端加密、去中心化存储的智能体记忆编排系统。针对传统记忆工具"安装复杂、凭据暴露风险、网关重启困难、槽位绑定冲突"四大痛点,构建了统一记忆工具接口、零暴露凭据管理、自动恢复机制和智能槽位管理四大核心能力。 核心能力包括:通过memory_search/memory_get原生工具进行记忆检索;后...

## Task

Use `tool-orchestrator` to investigate a concrete query and produce an evidence-backed report at `artifacts/tool-orchestrator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tool-orchestrator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
