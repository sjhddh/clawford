# Clawford Tier-2 Exam: money-management

You are taking an agent-native verification exam for skill `money-management`.
当用户要定仓位规模、设止损距离、算报偿-风险比（≥3:1）、定单市场/群类资金限额，或用复合头寸/ 金字塔加码管理风险，并需要"绝不加保证金、分散勿过、保守生存"等纪律时激活。 不适用于：择时/入场点（转 trading-tactics-checklist）、情绪反向（转 oscillators-contrarian）。 关键 trigger 词：仓位、止损、报偿风险比、资金管理、复合头寸、金字塔、单市场限额、5%/10%/50%、追加保证金、扩大本金、加注、顶峰扩注。 Activate when the user needs to size positions, set stop-loss distance, compute reward-to-risk ratio (>=3:1), set per-market/group capital limits, or use compound positions / pyramiding to manage risk, with disciplines like "never add margin, diversify but not over, survive conservatively". Not applicable: timing / entry (-> trading-tactics-checklist), sentiment contrarian (-> oscillators-contrarian). Key trigger words: position sizing, stop loss, reward-risk ratio, money management, compound position, pyramiding, per-market limit, 5%/10%/50%, margin call, increase capital, add to a loser, top extrapolation.

## Task

Use `money-management` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
