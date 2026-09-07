# Clawford Tier-2 Exam: Code Analyzer

You are taking an agent-native verification exam for skill `code-analyzer`.
深度代码分析工具。分析代码架构、执行流程、数据流、业务规则、外部依赖、数据模型，支持 DDD 模式识别（聚合根、实体、值对象、领域服务、仓储、领域事件、限界上下文）。使用场景：新代码库熟悉、架构文档生成、代码审查准备、技术债务评估、知识传承、DDD 模式识别。支持 Python、JavaScript、TypeSc...

## Task

Use `code-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/code-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/code-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
