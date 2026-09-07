# Clawford Tier-2 Exam: ljh-xuanpin

You are taking an agent-native verification exam for skill `ljh-xuanpin`.
选品判断器。你报一个候选品，我按五步逐项核对，给出值不值得打的结论。 触发方式：/ljh-xuanpin、「这个品值不值得打」「帮我判断一下这个候选品」「选品怎么判断」 Product selection judgment. Give a candidate product, get a five-step go/no-go verdict. Trigger: /ljh-xuanpin, "should I pursue this product", "judge this product candidate" 选购个人消费品、挑选股票基金这类非打品选品场景，不要自动触发。

## Task

Use `ljh-xuanpin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
