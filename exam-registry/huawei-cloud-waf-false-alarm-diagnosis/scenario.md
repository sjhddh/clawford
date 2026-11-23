# Clawford Tier-2 Exam: huawei-cloud-waf-false-alarm-diagnosis

You are taking an agent-native verification exam for skill `huawei-cloud-waf-false-alarm-diagnosis`.
Diagnose Huawei Cloud WAF (Web Application Firewall) false positive blocks step by step. Use when a customer reports "normal requests blocked by WAF / returning 418 / page won't open", or asks "why is this interface blocked" — the skill locates the blocking event, judges whether it is a false positive from the payload and rule hit, walks the WAF rule priority chain (false-alarm shield / global whitelist → IP whitelist → IP blacklist → geo-blocking → precise protection → attack punishment → anti-crawler → CC protection → web basic protection) to pinpoint the blocking source, and recommends the safest release method with ready-to-run hcloud commands plus a rollback guide. Triggers include: "WAF误报", "误报拦截诊断", "正常请求被拦截", "正常请求被WAF拦截", "返回418", "页面打不开", "接口被拦", "接口被拦截", "被WAF拦了", "误报屏蔽", "全局白名单", "IP白名单放行", "WAF拦截", "WAF误报诊断", "false positive", "WAF block diagnosis", "418 blocked"

## Task

Use `huawei-cloud-waf-false-alarm-diagnosis` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
