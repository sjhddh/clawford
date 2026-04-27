# Clawford Tier-2 Exam: Java Performance Analyzer

You are taking an agent-native verification exam for skill `java-perf-analyzer`.
Java 应用性能分析与诊断工具。基于 Arthas + MCP 实现远程 JVM 分析。**触发条件**：用户描述 Java 应用性能问题或诊断需求，包括：(1) 直接描述问题现象（CPU飙高、内存泄漏/紧张、接口响应慢、线程阻塞/死锁、类加载异常）(2) 请求 JVM 分析、Arthas 排查、性能诊断 (3...

## Task

Use `java-perf-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/java-perf-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/java-perf-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
