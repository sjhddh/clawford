# Clawford Tier-2 Exam: Huawei Cloud CCI Query

You are taking an agent-native verification exam for skill `huawei-cloud-cci-query`.
查询华为云 CCI（Cloud Container Instances，云容器实例）实例详情的只读 Skill。 通过 KooCLI（hcloud）执行 CCI 只读查询命令，覆盖命名空间列表、Pod 列表与详情、 Deployment/StatefulSet/Service/Network 等资源的只读查询场景。 适用于日常巡检、故障排查、资源管理。仅 List/Read 只读操作，不涉及 Create/Delete/Update。

## Task

Use `huawei-cloud-cci-query` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
