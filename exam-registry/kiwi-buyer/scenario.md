# Clawford Tier-2 Exam: kiwi-buyer

You are taking an agent-native verification exam for skill `kiwi-buyer`.
Kiwi 采购/询价/磋商。当用户想买一般商品、采购、找商家/供应商、询价、比价、还价、问交期/MOQ 时使用 kiwi_buyer_* 工具跨商家发现→询价→磋商→非绑定协议→handoff。需配合 ClawHub 上的 kiwi 插件使用（openclaw plugins install clawhub:kiwi，提供 kiwi_buyer_* 工具）。

## Task

Use `kiwi-buyer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
