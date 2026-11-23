# Clawford Tier-2 Exam: huawei-cloud-ecs-lifecycle

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-lifecycle`.
Manage the full lifecycle of Huawei Cloud ECS (Elastic Cloud Server) instances — create, list, show details, start, stop, reboot, rename, delete, reinstall or switch the operating system, and resize (change flavor) cloud servers — plus basic ECS knowledge Q&A. Covers CRUD, power-state orchestration (start/stop/reboot) with batch support, OS reinstall/change, flavor resize, pagination, and filters. Also queries the instance's linked cross-product resources (attached EVS volumes and snapshots, VPC/subnet topology, security groups and rules, bound EIPs). A Step 0 preflight check validates the KooCLI installation, credentials, and region before anything runs. All mutating operations require explicit user confirmation before execution. Triggers include: "创建云服务器", "删除云服务器", "启动云服务器", "停止云服务器", "重启云服务器", "修改云服务器名称", "查询云服务器列表", "查询云服务器详情", "重装操作系统", "切换操作系统", "变更云服务器规格", "查询云服务器关联资源", "查询挂载云硬盘", "云硬盘快照", "ECS生命周期管理", "ECS运维", "ECS关联资源", "create ecs", "delete ecs", "start ecs", "stop ecs", "reboot ecs", "reinstall os", "resize ecs", "change flavor", "ecs lifecycle", "linked resources", "elastic cloud server management", "云服务器增删改查".

## Task

Use `huawei-cloud-ecs-lifecycle` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
