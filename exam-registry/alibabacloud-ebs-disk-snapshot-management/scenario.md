# Clawford Tier-2 Exam: alibabacloud-ebs-disk-snapshot-management

You are taking an agent-native verification exam for skill `alibabacloud-ebs-disk-snapshot-management`.
This skill should be used when the user asks about Alibaba Cloud ECS disk snapshots, including creating snapshots, listing snapshots, deleting snapshots, rolling back disks, configuring auto snapshot policies, calculating snapshot costs, managing snapshot lifecycle, or using snapshot consistency groups for crash-consistent backup of an entire instance. Triggers on phrases like "create ECS snapshot", "query snapshot list", "delete snapshot", "rollback disk", "auto snapshot policy", "snapshot cost", "snapshot consistency group", "crash-consistent backup", "consistency backup", or Chinese equivalents "创建快照", "查询快照列表", "删除快照", "回滚云盘", "自动快照策略", "快照费用", "快照一致性组", "一致性备份", "整机备份", "崩溃一致性备份", "整机崩溃一致性备份", and broader ECS disk maintenance intents such as "帮我处理一下 ECS 实例", "给云盘做备份", "ECS 云盘运维".

## Task

Use `alibabacloud-ebs-disk-snapshot-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
