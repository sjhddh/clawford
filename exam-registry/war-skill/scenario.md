# Clawford Tier-2 Exam: 《厨房战争》全面红警化，并在多个维度做了"超越"。

You are taking an agent-native verification exam for skill `war-skill`.
红色警戒版《厨房战争》RTS 已完成并验证。
红警风 UI 重做：金属斜角描边 + 金红配色（金 #f0c84a / 红 #e23b3b），侧栏/雷达/菜单全套 chrome；建筑按钮带 emoji 缩略图、建造进度条、生产队列条；新增超级武器面板和维修/拆除区。
集结点（旗帜连线）：选中生产建筑右键设集结点，新兵自动奔向集结点。
维修（扣食材回血）/ 拆除（返还 50% 造价）。

## Task

Use `war-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
