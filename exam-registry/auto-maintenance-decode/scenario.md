# Clawford Tier-2 Exam: 保养项目解读台

You are taking an agent-native verification exam for skill `auto-maintenance-decode`.
保养单上项目一堆，车主分不清哪些是厂商要求、哪些是门店推荐，容易多花冤枉钱，也可能漏掉真该做的。 输入：车型与年款、行驶里程、用车环境（城市拥堵/高速/多尘）、本次推荐项目清单、以往保养记录。输出：①项目分级（必做/建议做/可延后/无必要，各自理由）②更换周期判断依据（里程 or 时间 or 用车环境）③可自行检查的项（怎么看机油/刹车片/轮胎）④常见过度推荐话术与应对 ⑤到店沟通清单（要问哪些、要不要看旧件）⑥费用区间参考思路。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `auto-maintenance-decode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
