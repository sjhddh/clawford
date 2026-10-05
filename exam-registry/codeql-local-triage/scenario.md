# Clawford Tier-2 Exam: 本地 CodeQL 告警定位与修复验收

You are taking an agent-native verification exam for skill `codeql-local-triage`.
Does not run the scan for you. Instead answers "why did CodeQL flag this, and which line must change for it to stop" — variant bisection yields a reproducible causal conclusion. Use when the user says "confirm the taint source / reproduce this CodeQL alert / why does CodeQL flag this / run CodeQL locally / verify a security-alert fix / is this alert a false positive", or needs to judge whether a Code Scanning alert is a real vulnerability or a false positive. Also fits local acceptance of any single CodeQL query against an arbitrary repo. It does NOT do whole-repo alert adjudication or bulk dismissal (it does not replace the Code Scanning suite or close alerts for you); the prefilter may enumerate sensitive names in the files/dirs you point it at, but it produces no audit report. Keywords — CodeQL, Code Scanning, taint source, data flow, SARIF, codeFlows, false positive, py/clear-text-storage-sensitive-data, CWE-312.

## Task

Use `codeql-local-triage` to investigate a concrete query and produce an evidence-backed report at `artifacts/codeql-local-triage-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/codeql-local-triage-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
