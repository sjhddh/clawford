# Clawford Tier-2 Exam: huawei-cloud-ecs-manage

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-manage`.
Use when managing Huawei Cloud ECS (Elastic Cloud Server / 弹性云服务器) instances — lifecycle management (create / start / stop / restart / delete), instance querying, quota/flavor/image inspection, and multi-step root-cause diagnosis of ECS instance creation failures (quota → flavor → image → network → keypair → disk). Provides 12 huawei_* actions: huawei_list_ecs_instances, huawei_get_ecs_instance, huawei_list_ecs_flavors, huawei_list_ecs_images, huawei_list_ecs_quotas, huawei_diagnose_ecs_create_failure, huawei_analyze_ecs_health, huawei_create_ecs_instance, huawei_start_ecs_instance, huawei_stop_ecs_instance, huawei_restart_ecs_instance, huawei_delete_ecs_instance. Service keywords: ECS, elastic cloud server, instance, VM, server, flavor, image, quota, keypair, security group, subnet, EIP, 云服务器, 弹性云服务器, 实例, 规格, 镜像, 配额, 密钥对, 安全组, 子网, 创建失败, 启动, 停止, 重启, 删除. Triggers include: "ECS 创建失败", "云服务器创建失败", "创建云主机失败", "ECS 创建不了", "create ECS failed", "instance creation failed", "创建云服务器", "启动云服务器", "停止云服务器", "重启云服务器", "删除云服务器", "ECS 规格", "ECS 配额", "ECS 镜像", "list ECS instances", "diagnose ECS", "ECS health", "ecs create diagnose".

## Task

Use `huawei-cloud-ecs-manage` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
