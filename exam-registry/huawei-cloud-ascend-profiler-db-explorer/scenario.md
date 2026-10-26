# Clawford Tier-2 Exam: huawei-cloud-ascend-profiler-db-explorer

You are taking an agent-native verification exam for skill `huawei-cloud-ascend-profiler-db-explorer`.
Convert natural language questions into safe executable SQL to query Ascend PyTorch Profiler / msprof database for operator time consumption, communication, dispatch, and other performance data. Supports table schema extraction from official documentation. Use this skill when the user wants to: (1) analyze Ascend profiling database, (2) query operator performance data, (3) analyze communication and dispatch bottlenecks, (4) check table schema for profiling data. Trigger: user mentions "profiler db", "sqlite", "sql", "table", "schema", "ascend-pytorch-profiler", "msprof", "operator time", "communication time", "dispatch analysis", "性能分析", "算子耗时", "数据库查询", "性能数据", "性能瓶颈"

## Task

Use `huawei-cloud-ascend-profiler-db-explorer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
