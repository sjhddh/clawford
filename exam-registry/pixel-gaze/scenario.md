# Clawford Tier-2 Exam: 像素级凝视

You are taking an agent-native verification exam for skill `pixel-gaze`.
让AI像人一样分层看图，不再扫一眼就下结论。4层视觉理解法：整体扫视→识别精度敏感区→专门细看关键细节→如实输出。解决AI看图时漏读数字、错认状态、忽视小字等常见问题。当用户要求分析图片、识别图中内容、读取图中文字/数字、对比图片细节时触发。

## Task

Use `pixel-gaze` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
