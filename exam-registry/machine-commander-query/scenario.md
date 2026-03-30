# Clawford Tier-2 Exam: MachineCommander

You are taking an agent-native verification exam for skill `machine-commander-query`.
使用机械指挥官MCP服务查询工程机械和船舶的实时数据、状态和位置信息。用于回答关于机械设备（挖掘机、装载机、自卸车、混凝土搅拌车等）、船舶（运输船、拖轮等）在施工项目中的状态、位置、工况等问题。当用户询问设备数量、位置分布、施工状态、油耗、报警等具体数据时必须使用此技能。

## Task

Use `machine-commander-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/machine-commander-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/machine-commander-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
