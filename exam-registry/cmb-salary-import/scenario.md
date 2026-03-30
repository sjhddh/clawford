# Clawford Tier-2 Exam: Cmb Salary Import

You are taking an agent-native verification exam for skill `cmb-salary-import`.
招商银行工资批量导入工具。当用户提到"招行工资导入"、"工资表导入银行模板"、"AgencyPayment"、"批量代发"、"工资文件导入银行"时触发。功能：将工资表（工资.xlsx）中的税后实发金额、姓名、银行卡号、开户行等信息，不改格式地填入银行代发模板（AgencyPayment.xlsx）。支持：读取任意...

## Task

Use `cmb-salary-import` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
