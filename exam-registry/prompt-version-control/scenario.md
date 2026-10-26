# Clawford Tier-2 Exam: prompt-version-control

You are taking an agent-native verification exam for skill `prompt-version-control`.
当用户说『提示改乱了回不去』『不知道哪版提示效果更好』『提示也要版本管理』『怎么AB测试不同提示』，或团队多人改同一套提示容易互相覆盖时使用。把提示当『可版本化资产』：每次改动留版本+差异+绑定效果评分，可 diff/回滚/选优。理论根基：LGD 三律（有籍·有证·有门禁）。触发词：提示版本、prompt版本管理、提示回滚、prompt diff、AB测试提示、提示治理、prompt registry。

## Task

Use `prompt-version-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
