# Clawford Tier-2 Exam: huawei-cloud-computing-query

You are taking an agent-native verification exam for skill `huawei-cloud-computing-query`.
Queries Huawei Cloud computing resources (ECS/BMS/IMS/AS/CCE), Covers ECS instances, flavors, keypairs, quotas, server groups, block devices, NICs, VNC console, BMS bare metal servers/flavors/quotas, IMS images/OS versions/members/quotas, AS scaling groups/configs/policies/activity logs/lifecycle hooks/warm pools/quotas, and CCE clusters/nodes/node pool details/node pool tags/cluster tags/quotas (read-only). No write operations. Cross-category: for cloud disks (EVS) use the storage query skill; for ECS create/start/stop/reboot/delete/resize use the ECS management skill; for CCE workloads/namespaces/events use the CCE kubectl-based skills. Use this skill when the user needs to query ECS instance details, list flavors, check BMS availability, browse images, view auto-scaling group/policy status, or inventory CCE clusters and nodes. Triggers include: "弹性云服务器", "ECS", "裸金属", "BMS", "镜像", "IMS", "弹性伸缩", "AS", "伸缩组", "伸缩策略", "规格查询", "CCE", "云容器引擎", "集群", "节点", "节点池", "flavor", "instance", "image", "scaling", "cluster", "node".

## Task

Use `huawei-cloud-computing-query` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
