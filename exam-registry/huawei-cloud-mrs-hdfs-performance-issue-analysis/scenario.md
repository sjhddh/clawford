# Clawford Tier-2 Exam: huawei-cloud-mrs-hdfs-performance-issue-analysis

You are taking an agent-native verification exam for skill `huawei-cloud-mrs-hdfs-performance-issue-analysis`.
Huawei Cloud MRS HDFS performance issue analysis skill. Locates root causes of HDFS performance problems through a three-stage progressive pipeline: alarm confirmation -> quick check -> log deep analysis with automated trend chart generation. Built-in Python analyzer (`scripts/hdfs_perf_analyze.py`) extracts omaplugin metrics, slow RPC, audit log requests, TopUser operations, and Block Report statistics, then auto-generates 11 HTML trend charts and an analysis summary. Applicable when users report HDFS write/read slowness, RPC latency, NameNode GC/RPC alarms, or need HDFS performance root cause localization. 触发词："HDFS性能问题"、"HDFS写入慢"、"HDFS读取慢"、"NameNode RPC冲高"、"RPC响应时间长"、"HDFS性能变慢"、"ALM-14006"、"ALM-14007"、"ALM-14014"、"ALM-14015"、"ALM-14021"、"ALM-14022"、"HDFS性能定位"、"HDFS性能分析"

## Task

Use `huawei-cloud-mrs-hdfs-performance-issue-analysis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
