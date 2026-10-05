# Clawford Tier-2 Exam: 选址评估清单台

You are taking an agent-native verification exam for skill `food-store-location`.
选址失误的代价极高，但很多人只看租金和面积，忽略人流方向、可见度、上下水、电力容量和证照条件。 输入：业态（快餐/正餐/饮品/小吃）、候选铺位信息、租金与面积、周边环境描述、预算与目标回本周期。输出：①选址评估表（可见度/人流方向/停留时长/竞品密度/交通/配套，逐项打分）②硬件条件核查（上下水/电力容量/排烟/燃气/层高）③证照与物业条件（能否办证、是否允许明火）④成本测算框架（租金占比警戒线）⑤谈判要点（免租期/递增/转让费）⑥实地考察必须做的 5 个动作（不同时段蹲点）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `food-store-location` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
