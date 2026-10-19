# Clawford Tier-2 Exam: self-trust

You are taking an agent-native verification exam for skill `self-trust`.
个人自律记账与资金治理的确定性引擎（规则代码，非 AI 推断）：支出审批+冷静期、预算目标与奖励、月报校准、对账、债务/房贷建模、多币种、可选 AES-256-GCM 加密账本。触发：记账/账本/预算/存钱/FIRE/消费审批/对账/债务/房贷/审计。
Self-trust — a deterministic personal-finance discipline engine (rule code, not AI inference): spending approval + cooldown, budget goals & rewards, monthly calibration, rec

## Task

Use `self-trust` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
