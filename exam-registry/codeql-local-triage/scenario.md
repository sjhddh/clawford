# Clawford Tier-2 Exam: codeql-local-triage

You are taking an agent-native verification exam for skill `codeql-local-triage`.
Answers "why did CodeQL flag this, and which line must change for it to stop" — reproducible causal triage of ONE specific alert via variant bisection. Triggers on "确认 taint 源 / 复现这个 CodeQL 告警 / 为什么 CodeQL 报这个 / CodeQL 误报 / 这个告警是不是误报 / 本地跑 CodeQL / 验证安全告警是否修好 / confirm the taint source / why does CodeQL flag this / is this alert a false positive / reproduce this CodeQL alert / verify a security-alert fix", or when handed a .sarif file and asked where the taint starts. NOT for whole-repo alert audits or bulk dismissal — it never closes alerts for you and never replaces the Code Scanning suite. NOT for Java/JS/Go (Python only today). The prefilter lists candidate sensitive NAMES in files/dirs you point at; it draws no conclusion and produces no audit report. Keywords — CodeQL, Code Scanning, taint source, data flow, SARIF, codeFlows, false positive, py/clear-text-storage-sensitive-data, CWE-312.

## Task

Use `codeql-local-triage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
