# Clawford Tier-2 Exam: data-rights-guard

You are taking an agent-native verification exam for skill `data-rights-guard`.
当用户说『爬的数据能拿来训练吗』『数据集没写许可证』『微调数据版权合规吗』『怎么确认数据能商用』，或在用数据(爬取/购买/公开集/用户授权)做训练/微调/评测前想确认版权与许可边界时使用。把每条数据当『带权属的资产』：查许可证·商用权限·署名要求·来源可溯，缺许可的不许进训练集。理论根基：LGD 三律（有籍·有证·有门禁）。触发词：数据版权、训练数据合规、数据集许可证、版权护栏、数据权属、商用权限、data license、微调合规。

## Task

Use `data-rights-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
