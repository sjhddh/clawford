# Clawford Tier-2 Exam: 自驾路线规划台

You are taking an agent-native verification exam for skill `auto-selfdrive-route`.
自驾最累的不是开，而是没算好节奏：一天开太久、错过补给点、夜间走山路，到了地方只想睡觉。 输入：起终点、天数、每日可驾驶时长、车型与人员（含是否带儿童/老人）、偏好（风景/人文/少走高速）、季节。输出：①逐日行程表（起止点、里程、预计时长、休息点、驻停地）②驾驶节奏规则（每 2 小时休息、单日上限）③补给与加油点清单 ④路况与天气风险提示（山路/海拔/夜间）⑤住宿选择建议（位置优先于价格）⑥随车物品清单与应急方案。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `auto-selfdrive-route` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
