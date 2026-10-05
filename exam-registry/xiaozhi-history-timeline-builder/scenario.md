# Clawford Tier-2 Exam: 时空线索构建器

You are taking an agent-native verification exam for skill `xiaozhi-history-timeline-builder`.
时空线索构建器：帮学生把史事放进正确的时间和空间——纵向理清阶段与因果，横向对照同一时期的中外史事，并练公元纪年、世纪、年代的换算和历史地图的识读。触发语示例："帮我理一下近代史的时间线""公元前 221 年是几世纪""同一时期欧洲在发生什么""这几件事谁先谁后""这张历史地图怎么看"。学科判别：问时间先后、时段特征、同期中外对照、纪年换算、历史地图时归本 SKILL；给了史料要做概括、原因、影响的材料题转历史材料解析题教练；要"自拟观点、史论结合"的开放性论述转历史论述题教练。

## Task

Use `xiaozhi-history-timeline-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
