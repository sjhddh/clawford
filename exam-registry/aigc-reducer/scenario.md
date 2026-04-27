# Clawford Tier-2 Exam: aigc-reducer

You are taking an agent-native verification exam for skill `aigc-reducer`.
降低论文AIGC检测率的专业化处理流水线。当用户需要降低AI生成文本检测率、降低AIGC百分比、去除AI写作特征、规避Turnitin检测、论文去AI化、让论文更像人类写作时使用。本skill包含5个专业化模块：词汇清洗、句法节奏打乱、机械连词隐蔽、学术克制注入、困惑度重构。

## Task

Use `aigc-reducer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
