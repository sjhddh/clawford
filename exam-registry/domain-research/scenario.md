# Clawford Tier-2 Exam: Domain Research Tool

You are taking an agent-native verification exam for skill `domain-research`.
全功能域名研究工具。支持 RDAP (RFC 7480-7484) 结构化查询、WHOIS 传统查询、DNS 多类型记录解析 (A/AAAA/MX/NS/TXT/CNAME/SOA/CAA/SRV/PTR)、SSL/TLS 证书检查、域名可用性判断、多解析器 DNS 传播检测、子域名枚举、批量域名分析和交互式 H...

## Task

Use `domain-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/domain-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/domain-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
