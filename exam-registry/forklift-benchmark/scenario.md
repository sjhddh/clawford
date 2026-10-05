# Clawford Tier-2 Exam: forklift-benchmark

You are taking an agent-native verification exam for skill `forklift-benchmark`.
FK-Bench v2 叉车具身智能评测基准。让当前模型(无需任何外部 API)直接读题作答并自动评分、生成可视化图表报告。从 722 道题(6 模块×7 场景×3 难度)中抽题、用三层打分引擎(红线否决+LCS+参数IoU)打分。当用户提到叉车任务评测/评估、给模型或动作方案打分、自测/跑分、抽叉车操作题、动作方案是否合规、具身智能(embodied AI)benchmark、FK-Bench 时使用——即使没有明说"benchmark"。也用于解答叉车作业标准(GB/T 43756、ISO 3691-1、TSG 11)相关问题。

## Task

Use `forklift-benchmark` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
