# Clawford Tier-2 Exam: bias-auditor

You are taking an agent-native verification exam for skill `bias-auditor`.
当用户说『AI回答有偏见』『输出性别/地域/年龄刻板印象』『怎么检测模型偏见』『内容要过公平审查』，或在发布面向人群的内容(招聘/推荐/客服/评测)前想做公平性自检时使用。把模型输出当『带视角的生产物』：扫人口群体词·刻板表述·单边归因，标出潜在偏见并给去偏改写建议。理论根基：LGD 三律（有籍·有证·有门禁）。触发词：偏见检测、bias audit、公平性、刻板印象、AI歧视、内容审查、公平自检、stereotype。

## Task

Use `bias-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
