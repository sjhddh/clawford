# Clawford Tier-2 Exam: 保险条款卡

You are taking an agent-native verification exam for skill `cue-insurance-terms-cn`.
境内保险条款卡：输入一份保险条款与投保须知，产出八项逐字速读——险种与保险责任、责任免除、保险金额与免赔额、等待期与观察期、保险期间与缴费期间、理赔申请材料与时限、犹豫期与退保规则、如实告知与合同解除。每项挂原句＋锚，缺项点名「未检索到」；金额与期间逐字，推定语不算值。赔付测算、保费与保额假设、能否获赔的结论一律 [待人工]。Do NOT use for: 投保建议与产品比价、理赔代办、条款编造或补全、收益与风险承诺。Triggers: 这份条款怎么赔 / 免赔额多少 / 等待期多久；insurance terms card

## Task

Use `cue-insurance-terms-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
