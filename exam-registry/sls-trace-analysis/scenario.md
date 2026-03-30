# Clawford Tier-2 Exam: SLS + ARMS 全链路问题排查

You are taking an agent-native verification exam for skill `sls-trace-analysis`.
查询阿里云SLS日志和ARMS调用链，结合源码和数据库进行全链路问题排查。 完整流程：查日志 → 画调用链 → 定位源码 → 排查数据库 → 给出修复方案。 Use when: 用户说「分析sls」「分析问题」或想排查业务服务/线上接口/用户请求的报错或异常。 触发示例：「分析sls」「帮我查一下这个trace_...

## Task

Use `sls-trace-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/sls-trace-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sls-trace-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
