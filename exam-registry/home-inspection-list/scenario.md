# Clawford Tier-2 Exam: 验房收房清单台

You are taking an agent-native verification exam for skill `home-inspection-list`.
收房只有一两个小时，容易漏看空鼓、渗水、门窗变形、电路漏接，签了字再返修就难了。 输入：房屋类型（毛坯/精装/二手房）、面积、交房状态、有无陪验人员。输出：①分区分项检查表（入户/客厅/厨卫/阳台/门窗/水电/暖通，每项写检查方法与合格标准）②必备工具清单（空鼓锤/卷尺/电笔/手电/插线板）③问题记录模板（位置-现象-照片编号）④整改单写法（要求量化与限期）⑤签字前 5 项确认。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `home-inspection-list` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
