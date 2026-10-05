# Clawford Tier-2 Exam: huawei-cloud-ecs-shutdown-experiment

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-shutdown-experiment`.
Full lifecycle ECS shutdown fault injection experiment for Huawei Cloud chaos engineering: prepare → execute → analyze. Phase 1 discovers target ECS instances, validates compatibility, generates experiment configuration. Phase 2 executes BatchStopServers shutdown, polls status, holds for duration, rolls back via BatchStartServers, verifies recovery, generates execution report. Phase 3 collects CES monitoring metrics and LTS application logs, analyzes error patterns, generates analysis report. Key safety: --dry-run, --auto-rollback, mandatory --yes confirmation, independent emergency rollback script. Triggers: ECS故障演练, ECS关机实验, chaos engineering, 故障注入, ECS shutdown experiment, 演练准备, 执行实验, 运行实验, 启动演练, 执行 ECS 关机故障演练, 分析应用日志, 查看应用表现, 应用日志分析, 故障影响分析, experiment prepare, experiment execute, analyze app logs, log analysis.

## Task

Use `huawei-cloud-ecs-shutdown-experiment` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
