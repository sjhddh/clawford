# Clawford Tier-2 Exam: ai-policy-radar

You are taking an agent-native verification exam for skill `ai-policy-radar`.
当用户说『最近AI出了什么新规』『EU AI Act/脆监会/NMPA有没有新动作』『法规更新我得跟上』『帮我盯AI政策』，或要持续跟踪 AI 监管动态（EU AI Act / 中国 NMPA / 美国 FDA / GDPR 等）时使用。扫描法规库/更新日志，按主题（风险分级/透明度/数据/准入）归类变动并留痕（有证），输出「本月新增了什么、对你有何影响」。可运行脚本（policy_radar 扫描器）。理论根基：LGD 三律之有证（法规变动留痕可溯）。与 eu-ai-act-companion 互补（它管单法导航，本技能管跨法动态监测）。触发词：AI法规、政策雷达、监管动态、EU AI Act更新、合规追踪、policy radar、法规监测。

## Task

Use `ai-policy-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
