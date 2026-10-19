# Clawford Tier-2 Exam: tcm-medical-record-writing-standard

You are taking an agent-native verification exam for skill `tcm-medical-record-writing-standard`.
中医、中西医结合病历书写基本规范（试行）全文检索（国中医药发〔2002〕36号，2002-09-01 施行）。 覆盖门急诊病历、住院志、病程记录、手术麻醉记录、医嘱、护理记录、出院/死亡记录等全部文书的书写要求、 内容清单与完成时限。当用户问"入院记录几小时内完成""首次病程记录时限""主治查房记录""抢救记录怎么补记" "手术记录谁写""医嘱单分几种""出院记录内容""中医四诊怎么记入体格检查"等病历书写与病案管理问题时使用。

## Task

Use `tcm-medical-record-writing-standard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
