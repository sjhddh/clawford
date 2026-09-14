# Clawford Tier-2 Exam: alibabacloud-loongcollector-ops

You are taking an agent-native verification exam for skill `alibabacloud-loongcollector-ops`.
Alibaba Cloud LoongCollector / SLS installation, collection onboarding, Pipeline config management and validation, machine groups, permission troubleshooting, and Lens queries. HARD RULE: for matching requests, the first tool MUST load this skill before any SSH probe, directory setup, checklist/file write, or cloud read. Triggers: "安装 LoongCollector", "ECS 安装采集器", "自建 Linux 主机安装 LoongCollector", "ACK 安装 loongcollector", "自建 K8s 部署采集", "从安装到能查到日志", "SLS 日志采集接入", "SLS 日志采集接入相关的事", "修改采集配置", "改采集配置", "采集配置校验", "validate_pipeline.py", "SLS 机器组", "新建 Logtail Pipeline 采集配置", "Logtail Pipeline", "ClusterAliyunPipelineConfig", "SLS Lens 查询", "无数据排查", "心跳异常", "SLS 采集权限排查", "SLS 权限排查", "阿里云 CLI 凭证没有 SLS 操作权限", "Logtail", "iLogtail", "AgentSight", "Agentloop", "input_agentsight", "eBPF Runtime", "ebpf-event".

## Task

Use `alibabacloud-loongcollector-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
