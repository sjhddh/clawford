# Clawford Tier-2 Exam: huawei-cloud-ascend-command

You are taking an agent-native verification exam for skill `huawei-cloud-ascend-command`.
Huawei Ascend NPU natural language management skill, supporting both local direct connection and SSH remote modes. Provides comprehensive npu-smi command capabilities including device queries, configuration management, firmware upgrade, vNPU virtualization, certificate management, and compute power testing (FLOPS). Enables remote management and monitoring of Ascend NPU devices with real-time metrics tracking. Use this skill when the user wants to: (1) query NPU device status and health, (2) monitor temperature, power, memory/HBM utilization, (3) configure ECC settings and fan modes, (4) perform firmware upgrades, (5) manage vNPU virtualization, (6) run compute power tests, (7) check certificate information. Trigger: user mentionsnpu', 'ascend', 'NPU', 'Ascend', 'temperature', 'power', 'HBM', 'firmware', 'upgrade', 'vNPU', 'virtualization', 'certificate', 'FLOPS', 'compute', 'health', 'memory', 'utilization', 'ECC', 'fan', '昇腾', '昇腾卡', '昇腾状态', '显存', '算力', '设备查询', 'NPU监控'"

## Task

Use `huawei-cloud-ascend-command` to investigate a concrete query and produce an evidence-backed report at `artifacts/huawei-cloud-ascend-command-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/huawei-cloud-ascend-command-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
