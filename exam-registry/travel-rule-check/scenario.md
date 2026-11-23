# Clawford Tier-2 Exam: Travel Rule Check（旅行规则校验）

You are taking an agent-native verification exam for skill `travel-rule-check`.
LGD three-laws compliance for on-chain assets and VASP travel rule (FATF): sender and beneficiary KYC (name plus account, address plus geo) above thresholds (zero-dependency). travel-rule-check — LGD 三律在链上资产 / VASP 旅行规则（FATF）域的纵深合规工具（零依赖）：VASP 转账收发方 KYC（姓名+账号/地址+地理）超阈强制校验，对 AI 系统/数据做可执行合规校验。

## Task

Use `travel-rule-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
