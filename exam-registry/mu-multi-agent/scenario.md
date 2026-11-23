# Clawford Tier-2 Exam: 多Agent协作指挥官

You are taking an agent-native verification exam for skill `mu-multi-agent`.
✨ 一个Agent变一支队伍，还告诉你什么时候不用组队

【主要适用场景】
1、多个方向要同时调研，最后汇总成一份报告
2、批量同类任务（简历初筛、文档翻译、多版本文案）并行处理
3、高风险输出（评估报告、对外文档）需要独立评审把关
4、不确定任务该不该拆、怎么拆的时候

【重要功能/亮点】
1、🧭 三模式自动路由——指挥官/流水线/混合，不用手选
2、🚦 前置判断清单，简单任务直接劝退不硬并行
3、🔎 评审Agent分离，五维评分表只挑错不夸奖
4、📊 每次跑完一张统计卡，并行收益一眼可见
5、🪂 零依赖纯方法论，无子Agent能力也能降级使用

## Task

Use `mu-multi-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
