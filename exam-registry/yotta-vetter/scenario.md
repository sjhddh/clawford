# Clawford Tier-2 Exam: 元审 yotta-vetter

You are taking an agent-native verification exam for skill `yotta-vetter`.
元审 —— 安装任何技能前的安全审查协议：四阶段 checklist（来源→代码→权限→风险）+ 轻量 checker，与元安联动深度扫描。触发：安装/评估任何技能前、从市场或 GitHub 获取技能、审查他人分享的技能、任何「要装未知代码」的场景；或用户说 审查/审查技能/vetting/技能安全审查/检查技能 等。边界：checker 只做初审与报告，结论需人工确认；绝不代替最终决策。

## Task

Use `yotta-vetter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
