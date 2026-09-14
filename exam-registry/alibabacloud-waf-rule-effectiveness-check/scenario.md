# Clawford Tier-2 Exam: alibabacloud-waf-rule-effectiveness-check

You are taking an agent-native verification exam for skill `alibabacloud-waf-rule-effectiveness-check`.
Diagnose why a configured Alibaba Cloud WAF 3.0 custom protection rule (custom ACL, CC / rate limiting, scan protection, IP blacklist) is not working: name the first broken link in the chain and hand back the console fix path. Read-only checks of configuration state only; never sends test traffic. Use it when a customer says a rule has no effect at all, a rule matches in the logs but nothing is blocked, an attack that should have been blocked got through, a rule worked yesterday but not today, or a CC or rate-limiting rule does not trigger or bans far too widely. Not for: explaining why one specific request was blocked or looking it up by trace_id, whitelist rule effectiveness itself, live attack sample validation, built-in rule toggles, config export, or reports. Triggers: "规则不生效", "规则配了但不生效", "自定义规则不生效", "预期拦未拦", "该拦的没拦住", "漏拦截", "规则命中但没拦", "规则昨天还好今天失效", "CC不触发", "误封面过大", "规则为什么没生效", "WAF rule not effective", "rule not taking effect", "rule hit but not blocked"

## Task

Use `alibabacloud-waf-rule-effectiveness-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-waf-rule-effectiveness-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-waf-rule-effectiveness-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
