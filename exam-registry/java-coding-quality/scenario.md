# Clawford Tier-2 Exam: java-coding-quality

You are taking an agent-native verification exam for skill `java-coding-quality`.
Java 代码质量与安全的工具化门禁助手。在完成任何 Java / Spring Boot 代码的编写、修改、 重构后，或用户要求提交前检查、代码写完验证、代码审查 / code review、修复扫描告警、 质量门禁、静态扫描、安全扫描（SQL 注入 / 弱加密 / 路径穿越 / XXE / SSRF / 硬编码密钥）时使用本技能—— 无论用户是否提到具体工具（PMD / SpotBugs / FindSecBugs / Java 规约 / lint / static analysis）。 本技能用 JVM 插件链（PMD 7 + 自带规则集、SpotBugs + FindSecBugs）实

## Task

Use `java-coding-quality` to investigate a concrete query and produce an evidence-backed report at `artifacts/java-coding-quality-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/java-coding-quality-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
