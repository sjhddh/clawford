# Clawford Tier-2 Exam: cyberscope

You are taking an agent-native verification exam for skill `cyberscope`.
CyberScope — 可搜索的公开网络攻防/监控/审查方法参考目录：10 类目、62 方法、83 条 公开来源（MITRE ATT&CK、CISA、NIST、EFF、OWASP、SANS 等）。零依赖 Python 标准库 离线 CLI：加权搜索（title>keywords>description>resources）、单条明细、导出 json/csv/md、来源静态验证、目录质量报告（自改进钩子）、校验和锚点。纯参考性 文档——不含操作性/利用步骤。只读，不联网，确定性输出。

## Task

Use `cyberscope` to investigate a concrete query and produce an evidence-backed report at `artifacts/cyberscope-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cyberscope-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
