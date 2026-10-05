# Clawford Tier-2 Exam: 防爆阀设计选型

You are taking an agent-native verification exam for skill `explosion-proof-valve-selection`.
防爆阀（呼吸阀）设计选型工具。基于 Pack 箱体参数（体积、温度范围、海拔范围、时间） 计算所需透气量，并根据压差-透气量特性曲线推荐满足安全约束的防爆阀规格。 核心约束：防爆阀排气速率必须不低于单个电芯产气速率。 触发场景：防爆阀选型、呼吸阀选型、Pack 箱体透气量计算、电池包压力平衡设计、 温度变化透气量估算、海拔变化透气量估算、电池包排气设计、explosion-proof valve sizing。

## Task

Use `explosion-proof-valve-selection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
