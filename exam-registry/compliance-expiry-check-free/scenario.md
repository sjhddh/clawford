# Clawford Tier-2 Exam: 证照与特种设备年检到期台账核对（免费版）

You are taking an agent-native verification exam for skill `compliance-expiry-check-free`.
证照与特种设备年检到期台账逐项核对，营业执照、各类资质与许可证、危化品经营许可证、特种设备使用登记与年检记录逐行复算有效期至（上次检验日期 + 检验周期）与距到期天数（有效期至 − 基准日），核对状态与到期情况是否一致，并检出日期倒挂、检验周期非正、重复证照编号、空缺与无法识别的日期或数值，每条结论引用台账原文行号，基准日取台账内最新日期，不取系统当天。触发词包括 证照到期没查出来、特种设备年检逾期、年检台账对不上、许可证到期日算错、月度合规检查。

## Task

Use `compliance-expiry-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
