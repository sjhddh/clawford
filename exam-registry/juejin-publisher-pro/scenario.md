# Clawford Tier-2 Exam: juejin-publisher-pro

You are taking an agent-native verification exam for skill `juejin-publisher-pro`.
掘金全自动发布 + 知乎 CDP 半自动。login 扫码抓 Cookie，publish 一条龙：建稿（分类/双标签/摘要）→ PIL 生成封面并上传 → 挂专栏 → 发布 → 审核状态自检。全部接口口径经真实账号逆向实测（2026-09），含机审驳回避坑。

## Task

Use `juejin-publisher-pro` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
