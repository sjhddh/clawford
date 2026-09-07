# Clawford Tier-2 Exam: 安全情报雷达

You are taking an agent-native verification exam for skill `security-radar`.
安全情报雷达为 AI Agent 提供智能化的漏洞与威胁情报订阅能力。它聚合 NVD CVE、GitHub Security Advisory、社区恶意技能通报等多源数据，并按资产关联度与可利用性双重排序，把每天数十上百条告警压缩到只剩必须处理的两三条。 核心能力：多源情报聚合（CVE/GHSA/恶意技能）、资产...

## Task

Use `security-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
