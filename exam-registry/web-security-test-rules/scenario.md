# Clawford Tier-2 Exam: 网站测试安全规则

You are taking an agent-native verification exam for skill `web-security-test-rules`.
通用网站安全测试（授权渗透测试）规则与检查清单。当用户要求对网站 / Web 应用做安全测试、漏洞扫描、渗透测试、安全评估，或提到安全测试规则、最小影响测试、隐蔽测试、漏洞复查、授权门禁时使用。核心强调：必须获得授权（默认开启授权门禁，主用非对称签名授权令牌验证 AUTHORIZATION.json + 公钥验签，其余为备选）、最小影响、测试后还原、规范报告、不破坏目标、禁止跳出授权范围（含外站关联尝试须授权，规则 23）。关键词：网站安全测试、授权渗透测试、安全规则、漏洞测试、安全评估、渗透测试规范、web 安全、最小影响、隐蔽测试、授权门禁、签名授权、授权验证、mowenfalse、mowenbrokentrue、mowenwaitrue、禁止越界、外站授权

## Task

Use `web-security-test-rules` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
